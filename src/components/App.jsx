import React, {useEffect, useState} from 'react';
import pokemons from '../pokeapi'
import Card from './Card'
import BigCard from './BigCard'
import Filters from './Filters'
import './App.css'

function App() {

  const [details, setDetails] = useState({
    isVisible: false,
    name: '',
    id: '',
    abilities: [],
    types: '',
    image: ''
  });

  const [list, getList] = useState([]);
  const [fixedList, setFixedList] = useState([])

  useEffect(()=>{
    const loadList = async () =>{
      let pokeList = await pokemons;
      getList(pokeList)
      setFixedList(pokeList)
      // console.log(list)
    }
  
    loadList()
    
  
  } , [])

  function filterPokemons(filter){
    let inputValue = filter;

    getList(fixedList)

    if(inputValue.length !== 0){

      let newList = fixedList.filter(e => {
        return e.name.includes(inputValue);
      })

      getList(newList)
    }
  }

  function filterByType(type){
    console.log(type);
    // let newList = fixedList.filter(e => {
    //   return e.name.includes(inputValue);
    // })

    // getList(newList)
  }

  function handleClick(ident){
    setDetails({
      isVisible: true,
      name: ident.name,
      id: ident.id,
      abilities: ident.ability,
      types: ident.pokeType,
      image: ident.image
    });
  }

  return (
    <>
    <div className="header">
      <h1 className="logo">KantoDex</h1>
      <input type="text" placeholder="Search pokemons by name" id="nameFilter" onChange={()=>{ filterPokemons(document.getElementById('nameFilter').value) } }></input>

      <Filters filter={filterByType}/>

      </div>

    {details.isVisible && <BigCard visibility={details.isVisible} name={details.name} id={details.id} img={details.image} abilities={details.abilities} types={details.types} toggler={setDetails} key="1" />}

    <div className="pokemon-list">
      {list.map(item => {
        return (
        <Card name={item.name} image={item.image} pokeType={item.types} ability={item.ability} id={item.id} key={item.id} clickHandle={handleClick} />
        )
      })}
      
      
    </div>

    </>
  )
}

export default App;