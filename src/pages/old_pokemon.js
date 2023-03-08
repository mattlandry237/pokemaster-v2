import axios from './/api/pokeapi.js'
import React, { useState, useEffect } from 'react'
import styles from '../styles/pokemon.module.css'

export default function Pokemon(){

    const [pokemon, setPokemon] = useState([])
    const [pokemonID, setPokemonID] = useState(1)
    const [pokemonType1, setPokemonType1] = useState("")
    const [pokemonType2, setPokemonType2] = useState("")

    const pokemonRequest = async () => {
        const response = await axios.get(`/pokemon/${pokemonID}`); 
    
        setPokemon(response.data)
        setPokemonType1(response.data.types[0].type.name)
        if(response.data.types[1]) {
            setPokemonType2(response.data.types[1].type.name)
        }else{
            setPokemonType2("")
        };
    };

    useEffect(() => {
        pokemonRequest();
    }, [pokemonID])

    return (
        <div>
            {pokemon && pokemon.types ?
                <div> 
                    { pokemon.sprites ? <img className={styles.pokemonImg} src={pokemon.sprites.other.home.front_default}></img> : <h1></h1>}
                    <h1>{pokemon.name}</h1>
                    <img src={`types/${pokemonType1}.png`}></img>
                    <br />
                    {pokemonType2 ? <img src={`types/${pokemonType2}.png`}></img> : <h2></h2> }
                </div>        
        :
        <h1> no pokemon</h1>
        }

            <button onClick={() => { setPokemonID(Math.floor(Math.random() * 300) + 1)}}>Random Pokemon</button>
        </div>
    )
}