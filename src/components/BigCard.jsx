import React from 'react';
import PokeType from './Type';
import './BigCard.css'

function BigCard(props){
    
    function closeCard(){
        props.toggler({isVisible: false})
    }

    const bigStyle = {
        width: '80vw',
        height: '80vh',
        border: '1px solid black',
        position: 'fixed',
        left: '10%',
        top: '10%',
        backgroundColor: 'white',
        zIndex: '1000',
        opacity: props.visibility ? '1' : '0',
        transition: 'opacity .5s'
    }

    console.log(props)

    return (
        <div style={bigStyle} className="details-card">
            <button onClick={closeCard} className="close">X</button>

            <section className="img-column">
                <div>
                    <h1>{props.id + ' - '}</h1>
                    <h1>{props.name}</h1>
                </div>
                <img src={props.img} alt={props.name}/>
                {props.types.map(e =>{
                    return (<PokeType names={e.type.name} key={e.slot}/>)
                })}
            </section>

            <section className="detailed-column">
                {props.abilities.map((e) =>{

                    let name = e.name.replace('-', ' ')
                    return <>
                    <h1>{name}</h1>
                    <p>{e.text}</p>
                    </>    
                })}

                
            </section>

        </div>
    )
}

export default BigCard;