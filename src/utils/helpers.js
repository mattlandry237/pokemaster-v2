import axios from '../pages/api/pokeapi.js'


const randomID = (max) => {
    return Math.floor(Math.random() * max) + 1
}


//
//
const getPokemon = async (currentPokemon) => {
    let id = randomID(500);
    if (currentPokemon && currentPokemon.id == id) {
        do {
            id = randomID(500)

        } while (currentPokemon.id == id)
    }


    const response = await axios.get(`/pokemon/${id}`);

    let pokemon = {}
    pokemon.id = id
    pokemon.name = response.data.name
    pokemon.primaryType = response.data.types[0].type.name
    if (response.data.types[1]) {
        pokemon.secondaryType = response.data.types[1].type.name
    }
    pokemon.sprite = response.data.sprites.other.home.front_default

    return pokemon
}


//
//
const getType = async () => {
    const id = randomID(18)
    const response = await axios.get(`/type/${id}`);

    const type = {}

    type.name = response.data.name;
    type.damage_relations = response.data.damage_relations

    return type
}






export { getPokemon, getType }