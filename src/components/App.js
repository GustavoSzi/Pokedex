import React, {useEffect} from 'react';
import pokemons from './pokeapi'

function App() {

  useEffect(()=>{
    const loadList = async () =>{
      let list = await pokemons;
      console.log(list)
    }
  
    loadList()
  
  } , [])

  return (
    <div>
      Test
    </div>
  )
}

export default App;