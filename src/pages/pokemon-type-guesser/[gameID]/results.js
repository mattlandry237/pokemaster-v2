import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Carousel from '@/components/Carousel'
import Pokemon from '@/components/Pokemon'

import { useState } from 'react'
import { useRouter } from 'next/router'

const PTGResults = () => {
    const router = useRouter();
    const gameResults = JSON.parse(router.query.results);
    const totalScore = router.query.totalScore;

    const [activePokemon, setActivePokemon] = useState(gameResults[0].pokemon)

    return (
        <Container maxWidth="xl" sx={{ mt: "20px" }}>
            {/* Whole Page */}
            <Grid container justifyContent="space-around">
                {/* Left side */}
                <Grid item container xs={3} direction="column" justifyContent="space-between" style={{
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                }}>
                    <Grid item xs={1} alignSelf="center" textAlign="center">
                        <h1 style={{ margin: "10px 0px 0px 0px" }}>Game Over</h1>
                        <h1 style={{ margin: "10px 0px 0px 0px" }}>Score: {totalScore}</h1>
                    </Grid>

                    <Grid item xs={2} style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Grid container justifyContent="space-around" alignItems="center">
                            <Button href="/" variant="contained" color="primary">Home</Button>
                            <Button href="/pokemon-type-guesser" variant="contained" color="primary">Play Again</Button>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Right side */}
                <Grid item container justifyContent="center" xs={8}>
                    <Grid item container justifyContent="center" style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "10px"
                    }}>
                        <Carousel items={gameResults} setFunc={setActivePokemon}> </Carousel>
                    </Grid>


                    <Grid container justifyContent="center">
                        <Grid item>
                            <Pokemon pokemon={activePokemon}></Pokemon>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PTGResults;