import React from 'react';
import PokeType from './Type';
import './Card.css'

function Card (props) {

    return (
        <>
            <button onClick={(e)=>{
                e.preventDefault()
                props.clickHandle(props)
            }} className="pokeCard">
                <div className="inside">
                    <h1 className="id">{props.id}</h1>
                    <h1 className="name">{props.name}</h1>
                    <div className="inline">

                        <img src={props.image} alt={props.name} className="pokeImage" />

                        <div className="types">
                            {props.pokeType.map(e =>{
                                return <PokeType names={e.type.name} key={e.slot}/>
                            })}
                        </div>
                    </div>
                </div>
            </button>            
        </>

    )
}

export default Card;