const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'

const fetchLinks = async (url) => {
    const req = await fetch(url);
    const json = req.json();

    return json;
}

async function foreachLoop(element){
    let pokemons = []

    for(let i = 0; i < 151; i++){
        let pokemon = await fetchLinks(element[i].url)
        let ability = pokemon.abilities;
        let descriptions = []
        
        ability.forEach(async e => {
            let desc = await fetchLinks(e.ability.url)
            let entries = desc.effect_entries
            entries.forEach(ab => {
                if(ab.language.name === "en"){
                    let name = desc.name
                    let text = ab.effect
                    descriptions.push({name, text})
                }
            });
            
        });
        

        pokemons.push({
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            ability: descriptions,
            id: pokemon.id,
            key: pokemon.id,
            types: pokemon.types
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
export {fetchLinks}

// let pokemons = [];

// processFetch().then(resolved =>{
//      resolved;
// })