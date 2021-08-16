const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10'

const fetchLinks = async (url) => {
    const req = await fetch(url);
    const json = req.json();

    return json;
}

async function foreachLoop(element){
    let pokemons = []

    for(let i = 0; i < 10; i++){
        let pokemon = await fetchLinks(element[i].url)

        pokemons.push({
            name: pokemon.name,
            image: pokemon.sprites.front_default
        });
    }
    return pokemons;
}

const getPokemons = async () =>{
    let result = await fetchLinks(baseUrl);
    let pokemonList = result.results;
    

    let pokeInfo = await foreachLoop(pokemonList)
    
    return pokeInfo;
}






// const getPokemonList = async() =>{
//     return [
//         {
//             pokemons: await getPokemons()
//         }
//     ]
// }

export default getPokemons();

// let pokemons = [];

// processFetch().then(resolved =>{
//      resolved;
// })