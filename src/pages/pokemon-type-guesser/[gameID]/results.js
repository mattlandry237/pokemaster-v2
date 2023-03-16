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

    const [activePokemon, setActivePokemon] = useState(gameResults[0].pokemon)


    return (
        <>
            <Container maxWidth="xl">
                <Grid container justifyContent="center">
                    {gameResults.map((result) =>
                        <Grid item xs={3} style={{
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
            </Container>

            <Button href="/" variant="contained" color="primary">Home </Button>
        </>

    )
}



export default PTGResults;