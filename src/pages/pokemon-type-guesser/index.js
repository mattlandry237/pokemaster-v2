import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import HomeIcon from '@mui/icons-material/Home'
import Grid from "@mui/material/Grid"
import Image from "next/image"
import Router from 'next/router'
import GameScore from "../../components/GameScore"
import Pokemon from "../../components/Pokemon"
import TypeGrid from '../../components/TypeGrid'
import styles from "./PokemonTypeGuesser.module.css"

import { getPokemon } from "../../utils/helpers.js";
import { checkSubmittedTypes, typeSelected, getTypeResultsStyles } from "./helpers.js"
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



    const initNewRound = async () => {
        if (gameState.length + 1 < 10) {
            setGameState([...gameState, { "pokemon": pokemon, "selectedTypes": selectedTypes }])
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


    if (gameMode != "end") {
        return (
            <>
                <Image className={styles.backgroundImg} fill src={'/background.jpg'} />
                <Container maxWidth="xl">
                    <Button startIcon={<HomeIcon fontSize="large" />} href={'/'} style={{ position: 'absolute' }}></Button>
                    <Grid container sx={{ mt: '40px' }} justifyContent="center">

                        <Grid container item columnSpacing={6} xs={6}>
                            <Grid item>
                                <Pokemon pokemon={activePokemon} hidden={gameMode == "play"} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={2} justifyContent="flex-end">
                            <Grid item>
                                <GameScore currentRound={gameState.length + 1} score={score}></GameScore>
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
                                : <Button variant="contained" color="primary" onClick={() => { initNewRound() }}>Next Round</Button>
                            }
                        </Grid>

                    </Grid>
                </Container>
            </>
        )
    }
    return (
        <>
            <Image className={styles.backgroundImg} fill src={'/background.jpg'} />
            <Container maxWidth="xl">
                <Grid container>
                    <Grid container item className={styles.test} direction="column">
                        <h1> Game Over</h1>
                        <h2>{`Score: ${totalPoints}`}</h2>
                        <Button variant="contained" color="primary" href="/">Home</Button>
                        <Button variant="contained" color="primary" onClick={() => { { Router.reload(window.location.pathname) } }}>Play Again</Button>
                    </Grid>


                </Grid>

            </Container>
        </>
    )
}

export default PokemonTypeGuesser;