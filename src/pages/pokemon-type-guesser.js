import TypeChip from "../components/typechip/typechip.js";
import TypeCard from "../components/typecard/typecard.js";
import GameScore from "../components/gameScore/gameScore.js"
import Pokemon from "../components/pokemon/pokemon.js"
import Container from "@mui/material/Container"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { getPokemon } from "../utils/helpers.js";
import { typeData } from "../utils/typesInfo.js";
import { useState, useEffect } from 'react'
import Router from 'next/router'
import styles from "../styles/pokemon-type-guesser.module.css"


// Load inital Pokemon 
export async function getServerSideProps() {
    let i=0
    const pokemon = []
    while(i < 10){
        pokemon[i] = await getPokemon();
        i++
    }
    
    return {
        props: {
            pokemon
        }
    };
}

const initRoundState = {
    pokemon: {
        name: "",
        primaryType: "",
        secondaryType: "",
        sprite: ""
    },
    selectedTypes: [],
    roundResults: {
        primary: "",
        secondary: ""
    },
    points: 0
}

// Main Component
const PokemonTypeGuesser = ({ pokemon }) => {
    
    // State Variables    
    const [gameMode, setGameMode] = useState("play")
    const [roundState, setRoundState] = useState(() => ({...initRoundState, ...{"pokemon": pokemon[0]}}))
    const [gameState, setGameState] = useState([])
    const [totalPoints, setTotalPoints] = useState(0)
    
    useEffect(() => {
        console.log(gameState)
    }, [gameState])
    
    const initNewRound = () => {
        if(gameState.length + 1 < pokemon.length){
            setGameState(() => ([...gameState, roundState ]))
            setRoundState(initRoundState)
            setRoundState((roundState) => ({
                ...roundState,
                ...{"pokemon": pokemon[gameState.length + 1]} 
                }))
            setGameMode("play")
        }else{
            setGameMode("end")
        }
    }

    const submitAnswers = () => {
            checkSubmittedTypes()
            getTypeResultsStyles()
            setGameMode("results")
    }

    const getTypeResultsStyles = (type) => {
        if(gameMode == "play"){
            if(roundState.selectedTypes.includes(type))
                return "selected"
            else
                return "notSelected"

        }else if(gameMode == "results"){
            if(roundState.selectedTypes.includes(type)){
                if(roundState.pokemon.primaryType == type || roundState.pokemon.secondaryType == type){
                    return "correctSelected"
                }else{
                    return "wrongSelected"
                }
            }else if(roundState.pokemon.primaryType == type || roundState.pokemon.secondaryType == type){
                    return "correctNotSelected"
                }
            }else {
                return "notSelected"
            }
    }


    const checkSubmittedTypes = () => {
        let newRoundResults = {}
        let currentRoundPoints = 0
        const {primaryType, secondaryType } = roundState.pokemon
        newRoundResults.primary = roundState.selectedTypes.includes(primaryType)
        if(newRoundResults.primary) currentRoundPoints++
        if(secondaryType) {
            newRoundResults.secondary = roundState.selectedTypes.includes(secondaryType)
            if(newRoundResults.secondary) currentRoundPoints++
        }
        setRoundState((roundState) => ({ 
            ...roundState,
            ...{"roundResults": newRoundResults},
            ...{"points": currentRoundPoints}
        }))
        setTotalPoints(totalPoints + currentRoundPoints)
    }


    // Updates state variable 'selectedTypes' to add or remove user selected types
    const typeSelected = (type) => {
        if(gameMode == "play"){
            if(roundState.selectedTypes.includes(type)){
                const arr = roundState.selectedTypes.filter(selectedType => selectedType !== type)
                setRoundState(roundState => ({
                    ...roundState,
                    ...{"selectedTypes": arr}
                }))
            }else {
                if(roundState.selectedTypes.length < 2){  
                    let newRoundState = {"selectedTypes": [...roundState.selectedTypes, type]}
                    setRoundState(roundState => ({
                        ...roundState,
                        ...newRoundState
                    }))
                }
            }
        }
    }


    if(gameMode != "end"){
        return (
            <>            
            <Image className={styles.backgroundImg} fill src={'/background.jpg'} /> 
            <Container maxWidth="xl">               
                    <Grid container sx={{mt: '40px'}} justifyContent="center">

                        <Grid container item  columnSpacing={6} xs={6}>
                            <Grid item>
                                <Pokemon pokemon={roundState.pokemon} hidden={gameMode == "play"} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={2} justifyContent="flex-end">
                            <Grid item>
                                <GameScore currentRound={gameState.length + 1} score={totalPoints}></GameScore>
                            </Grid>
                        </Grid>

                        <Grid container item xs={8} sx={{mt: '30px'}} className={styles.typesContainer} rowSpacing={1} align="center">
                                {typeData.map(({name, primaryColor, secondaryColor}) => 
                                    <Grid item sx={{m: "auto"}} xs={8} sm={6} md={4} xl={2} align="center" onClick={() => typeSelected(name)}>
                                        <TypeCard type={name} primaryColor={primaryColor} secondaryColor={secondaryColor} highlight={getTypeResultsStyles(name)}></TypeCard>
                                    </Grid>
                                )}

                        </Grid>

                        <Grid container item sx={{mt: '30px'}} xs={8} justifyContent="flex-end">
                            { gameMode == "play"
                            ? <Button variant="contained" color="primary" onClick={() => submitAnswers()}>Submit</Button>
                            : <Button variant="contained" color="primary" onClick={() => {initNewRound()}}>Next Round</Button>
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
                    <Button variant="contained" color="primary" onClick={() => {{Router.reload(window.location.pathname)}}}>Play Again</Button>
                </Grid>


            </Grid>

        </Container>
        </>
    )

}

export default PokemonTypeGuesser;