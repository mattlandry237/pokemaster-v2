import Pokemon from "../components/pokemon/pokemon.js";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { getPokemon } from "../utils/helpers.js";
import Link from "next/link";

export async function getServerSideProps() {
    const pokemon = await getPokemon();
    return {
        props: {
            pokemon
        }
    };
}

const generateNewPokemon = async (setActivePokemon) => {
    const newPokemon = await getPokemon();
    setActivePokemon(newPokemon);
};

const RandomPokemon = ({ pokemon }) => {
    const [activePokemon, setActivePokemon] = useState(pokemon);

    useEffect(() => {
        console.log(activePokemon)
    },[activePokemon])

    return (
        <div>
            <Pokemon pokemon={activePokemon} />
            <Button
                variant="contained"
                onClick={() => {
                    generateNewPokemon(setActivePokemon);
                }}
            >
                Random Pokemon
            </Button>
            <Button component={Link} href="/" variant="contained" color="primary">
                Home
            </Button>
        </div>
    );
}


export default RandomPokemon