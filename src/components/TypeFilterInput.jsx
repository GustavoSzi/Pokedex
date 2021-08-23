import React from 'react';
import './TypeFilter.css';


function InputType(props){
    return (
    <div className="input">
        <label htmlFor={props.pokeType}>{props.pokeType}: </label>
        <input type="checkbox" id={props.pokeType} onClick={props.filter(props.pokeType)}></input>
    </div>
    )
}

export default InputType;