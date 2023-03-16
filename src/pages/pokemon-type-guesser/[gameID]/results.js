import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Pokemon from '../../../components/Pokemon'
import RoundResultItem from '../../../components/RoundResultItem'

import { useState } from 'react'
import { useRouter } from 'next/router'

const PTGResults = () => {
    const router = useRouter();
    const gameResults = JSON.parse(router.query.results);
    const totalScore = router.query.totalScore;

    const [activePokemon, setActivePokemon] = useState(gameResults[0].pokemon)


    return (
        <>
            <Container maxWidth="xl" sx={{ mt: "20px" }}>

                {/* Whole Page */}
                <Grid container justifyContent="space-around">
                    {/* Left side */}
                    <Grid item container xs={3} style={{
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.75)",
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    }}>
                        {/* */}
                        <Grid item container justifyContent="center">
                            <Grid item xs={12} style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignSelf: "flex-start",
                                justifyContent: "center"
                            }}>
                                <h1 style={{
                                    margin: "0px",
                                    alignSelf: "flex-start"
                                }}>Game Over</h1>
                                <h2 style={{
                                    margin: "0px",
                                    alignSelf: "flex-start"
                                }}>Total Score: {totalScore}</h2>

                            </Grid>
                        </Grid>


                        {/* */}
                        <Grid item container justifyContent="center" alignItems="flex-end" alignSelf="flex-end" sx={{ mb: "20px" }}>
                            <Grid item xs={5} style={{

                                display: "flex",
                                alignSelf: "flex-end",
                                justifyContent: "center"
                            }}>
                                <Button href="/" variant="contained" color="primary">Home</Button>
                            </Grid>

                            <Grid item xs={5} style={{

                                display: "flex",
                                alignSelf: "flex-end",
                                justifyContent: "center"
                            }}>
                                <Button variant="contained" color="primary">Play Again</Button>
                            </Grid>
                        </Grid>

                    </Grid>

                    {/* Right side */}
                    <Grid item container justifyContent="center" xs={8}>
                        <Grid item container justifyContent="center">
                            {gameResults.map((result) =>
                                <Grid item xs={4} style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }} onClick={() => { setActivePokemon(result.pokemon) }}>
                                    <RoundResultItem pokemon={result.pokemon} selectedTypes={result.selectedTypes}></RoundResultItem>
                                </Grid>
                            )}
                        </Grid>


                        <Grid container justifyContent="center">
                            <Grid item>
                                <Pokemon pokemon={activePokemon}></Pokemon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>


        </>

    )
}



export default PTGResults;