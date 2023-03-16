import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import HomeIcon from '@mui/icons-material/Home'
import Grid from "@mui/material/Grid"
import Image from "next/image"
import Link from "next/link"
import GameScore from "../../../components/GameScore"
import Pokemon from "../../../components/Pokemon"
import TypeGrid from '../../../components/TypeGrid'
import styles from "./PokemonTypeGuesser.module.css"

import { getPokemon } from "../../../utils/helpers.js";
import { checkSubmittedTypes, typeSelected, getTypeResultsStyles } from "./helpers.js"
import { useRouter } from 'next/router'
import { useState } from 'react'



export async function getServerSideProps() {
    const pokemon = await getPokemon();
    return {
        props: {
            pokemon
        }
    };
}


const PokemonTypeGuesser = ({ pokemon }) => {

    // State Variables    
    const [gameState, setGameState] = useState([])
    const [selectedTypes, setSelectedTypes] = useState([])
    const [activePokemon, setActivePokemon] = useState(pokemon)
    const [gameMode, setGameMode] = useState("play")
    const [score, setScore] = useState(0)

    const router = useRouter();
    const gameLength = router.query.numPokemon;
    const gameID = router.query.gameID;


    const initNewRound = async () => {
        if (gameState.length + 1 < gameLength) {
            setGameState([...gameState, { "pokemon": activePokemon, "selectedTypes": selectedTypes }])
            const newPokemon = await getPokemon()
            setActivePokemon(newPokemon)
            setSelectedTypes([])
            setGameMode("play")
        } else {
            setGameMode("end")
        }
    }

    const submitAnswers = () => {
        checkSubmittedTypes(activePokemon, selectedTypes, score, setScore)
        setGameMode("results")
    }

    return (
        <>
            <Image className={styles.backgroundImg} fill src={'/background.jpg'} />
            <Container sx={{ position: "relative" }} maxWidth="xl">
                <Button startIcon={<HomeIcon fontSize="large" />} href={'/'} style={{ position: 'absolute' }}></Button>


                <Grid container style={{ display: `${gameMode == "end" ? "block" : "none"}` }} className={styles.endGameContainer} justifyContent="flex-end" alignItems="center">
                    <Grid item>
                        <h1>Game Over</h1>
                        <h3>Click the button below to review your results</h3>
                    </Grid>
                    <Grid item>
                        <Link style={{ textDecoration: 'none' }}
                            href={{
                                pathname: `${gameID}/results/`,
                                query: {
                                    results: JSON.stringify(gameState)
                                }
                            }}
                            as={`${gameID}/results`}>
                            <Button variant="contained" color="primary">Review</Button>
                        </Link>

                    </Grid>
                </Grid>


                <Grid container sx={{ mt: '40px' }} justifyContent="center">

                    <Grid container item columnSpacing={6} xs={6}>
                        <Grid item>
                            <Pokemon pokemon={activePokemon} hidden={gameMode == "play"} />
                        </Grid>
                    </Grid>

                    <Grid container item xs={2} justifyContent="flex-end">
                        <Grid item>
                            <GameScore currentRound={gameState.length + 1 < gameLength ? gameState.length + 1 : gameLength} score={score}></GameScore>
                        </Grid>
                    </Grid>

                    <TypeGrid
                        typeSelectedFunc={typeSelected}
                        getTypeResultsStylesFunc={getTypeResultsStyles}
                        selectedTypes={selectedTypes}
                        currentPokemon={activePokemon}
                        gameMode={gameMode}
                        setStateFunc={setSelectedTypes}>
                    </TypeGrid>

                    <Grid container item sx={{ mt: '30px' }} xs={8} justifyContent="flex-end">
                        {gameMode == "play"
                            ? <Button variant="contained" color="info" size={'medium'} onClick={() => submitAnswers()}>Submit</Button>
                            : <Button variant="contained" color="primary" style={{ pointerEvents: `${gameMode == "end" ? "none" : null}` }} onClick={() => { initNewRound() }}>{(gameLength - (gameState.length + 1)) == 0 ? "Finish Game" : "Next Round"}</Button>
                        }

                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default PokemonTypeGuesser;