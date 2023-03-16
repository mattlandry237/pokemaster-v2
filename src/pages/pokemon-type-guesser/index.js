import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Link from 'next/link'


const PokemonTypeGuesserLanding = () => {

    const [numPokemon, setNumPokemon] = React.useState(10);

    const handleChange = (event) => {
        setNumPokemon(event.target.value);
    };

    const gameID = Math.floor(Math.random() * 2000) + 1

    return (
        <Container maxWidth="xl" >
            <Grid container sx={{ border: "2px black solid" }}>
                <Grid container item justifyContent="center">
                    <h1>Pokemon Type Guesser</h1>
                </Grid>
                <Grid container item justifyContent="center">
                    <p> Test your Pokemon knowledge with Pokemon Type Guesser. In this game you will be shown a randomly selected Pokemon. Selected up to 2 types that you believe the Pokemon to be.</p>
                </Grid>
                <Grid container item justifyContent="center" alignItems="center" columnSpacing={2} style={{ minHeight: "50vh" }}>

                    <Grid item>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel>Number of Pokemon</InputLabel>
                                <Select
                                    value={numPokemon}
                                    label="numPokemon"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Link style={{ textDecoration: 'none' }}
                            href={{
                                pathname: `/pokemon-type-guesser/${gameID}`,
                                query: {
                                    numPokemon: numPokemon
                                }
                            }}
                            as={`/pokemon-type-guesser/${gameID}`}>
                            <Button variant="contained" color="primary"> Start Game </Button>
                        </Link>
                    </Grid>


                </Grid>
            </Grid>
        </Container>
    )
}

export default PokemonTypeGuesserLanding