import axios from '../pages/api/pokeapi.js'

const orderedTypes = ["normal", "fire", "water",
                    "grass", "electric", "ice",
                    "fighting", "poison", "ground",
                    "flying", "psychic", "bug",
                    "rock", "ghost", "dark",
                    "dragon", "steel", "fairy"]

const randomID = (max) => {
    return Math.floor(Math.random() * max) + 1
}


const getPokemon = async () => {
    let id = randomID(300);
    const response = await axios.get(`/pokemon/${id}`);
    
    let pokemon = {}
    pokemon.name = response.data.name
    pokemon.primaryType = response.data.types[0].type.name
    if (response.data.types[1]){
        pokemon.secondaryType = response.data.types[1].type.name
    }
    pokemon.sprite = response.data.sprites.other.home.front_default
    
    return pokemon
}

const generateNewPokemon = async (setActivePokemon) => {
    const newPokemon = await getPokemon();
    setActivePokemon(newPokemon);
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



const getType = () => {

}


export { getPokemon, generateNewPokemon, getType, capitalizeFirstLetter, orderedTypes }