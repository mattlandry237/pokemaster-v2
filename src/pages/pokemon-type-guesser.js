import TypeChip from "../components/typechip/typechip.js";
import GameScore from "../components/gameScore/gameScore.js"
import Pokemon from "../components/pokemon/pokemon.js"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import { orderedTypes, getPokemon } from "../utils/helpers.js";
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
            setGameMode("results")
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



    if(gameMode != "end"){
        return (
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1}}>
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

                        <Grid container item xs={8} sx={{mt: '30px', textAlign: 'center'}} rowSpacing={1} justifyContent="center">
                            {orderedTypes.map((type) => 
                                <Grid item sx={{m: "auto"}} xs={2} onClick={() => typeSelected(type)}>
                                    <TypeChip sx={{m: 'auto'}} type={type} selected={roundState.selectedTypes.includes(type)} result={false} game={gameMode == "results" ? true : false} />
                                </Grid>
                            )}
                        </Grid>

                        <Grid container item sx={{mt: '30px'}} xs={8} justifyContent="flex-end">
                            { gameMode == "play"
                            ? <Button variant="contained" color="primary" onClick={() => submitAnswers()}>Submit</Button>
                            : <Button variant="container" color="secondary" onClick={() => {initNewRound()}}>Next Round</Button>
                            }
                        </Grid>

                    </Grid>
                </Box>




            </Container>
        )
    }else {
        return (
            <>
            <h1> Game Over</h1>
            <h2>{`Score: ${totalPoints}`}</h2>
            <Button variant="container" color="primary" onClick={() => {{Router.reload(window.location.pathname)}}}>Play Again</Button>
            </>
        )
    }

}

export default PokemonTypeGuesser;



const test = {
    primary: {type: "water", result: "true", water: true},
    secondary: ""
}

console.log(test.primary.fire)