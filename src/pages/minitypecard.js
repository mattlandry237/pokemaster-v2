import RoundResultItem from "../components/RoundResultItem";
import Grid from "@mui/material/Grid"

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
    return (
        <Grid container justifyContent="center" columnSpacing={2} rowSpacing={3} style={{ backgroundColor: "#5F82AD" }}>
            {/* {typeData.map(({ name }) =>
                <Grid item>
                    <MiniTypeCard type={name} ></MiniTypeCard>
                </Grid>
            )} */}

            <Grid item container justifyContent="center">
                <RoundResultItem pokemon={pokemon1}></RoundResultItem>


            </Grid>
            <Grid item container justifyContent="center">
                <RoundResultItem pokemon={pokemon2}></RoundResultItem>


            </Grid>
        </Grid>


    )
}


export default MiniTypeCardTest