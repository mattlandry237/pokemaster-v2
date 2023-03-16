import RoundResultItem from "../components/RoundResultItem";
import Grid from "@mui/material/Grid"
import Carousel from "../components/Carousel";

import { getPokemon } from "../utils/helpers.js"



export async function getServerSideProps() {
    const pokemon1 = await getPokemon();
    const pokemon2 = await getPokemon();
    return {
        props: {
            pokemon1,
            pokemon2
        }
    };
}


const MiniTypeCardTest = ({ pokemon1, pokemon2 }) => {

    const poke = [
        {
            pokemon: {
                primaryType: "water",
                secondaryType: "rock",
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png"
            }
        },
        {
            pokemon: {
                primaryType: "water",
                secondaryType: "rock",
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png"
            }
        },
        {
            pokemon: {
                primaryType: "water",
                secondaryType: "rock",
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png"
            }
        },
        {
            pokemon: {
                primaryType: "water",
                secondaryType: "rock",
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png"
            }
        },
        {
            pokemon: {
                primaryType: "water",
                secondaryType: "rock",
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png"
            }
        },
        {
            pokemon: {
                primaryType: "water",
                secondaryType: "rock",
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png"
            }
        },
        {
            pokemon: {
                primaryType: "water",
                secondaryType: "rock",
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png"
            }
        },
    ]


    return (
        <>
            <Grid container justifyContent="center" columnSpacing={2} rowSpacing={3}>
                <Grid item container justifyContent="center">
                    <RoundResultItem pokemon={pokemon1}></RoundResultItem>


                </Grid>
                <Grid item container justifyContent="center">
                    <RoundResultItem pokemon={pokemon2}></RoundResultItem>
                </Grid>

                <Grid item>

                    <div style={{ width: "500px" }}>
                        <Carousel items={poke}></Carousel>
                    </div>
                </Grid>
            </Grid>
        </>


    )
}


export default MiniTypeCardTest