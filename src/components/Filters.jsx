import React from 'react';
import TypeFilter from './TypeFilterInput';
import './Filters.css';

function Filters(props){
    let types = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel'];

    return (
        <>
        <h1 className="filter-title">Filter by type:</h1>
        <div className="type-filters">
            
           {types.map((element, index)=>{
               return (<TypeFilter filter={props.filter} pokeType={element} key={index} />)
           })}
        </div>
        </>
    )
}

export default Filters;