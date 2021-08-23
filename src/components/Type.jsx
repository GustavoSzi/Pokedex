import React from 'react';
import './Type.css';

function PokeType(props){

    const element = props.names;
    
    const typeClass = (elementColor)=> {
        let standard = 'pokeType '
        return standard += elementColor
    }

    return(
    <div className="type-div">
        <h2 className={typeClass(element)}>{element}</h2>
    </div>)

    
}

export default PokeType;