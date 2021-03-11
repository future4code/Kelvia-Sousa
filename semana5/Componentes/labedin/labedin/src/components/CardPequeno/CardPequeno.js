import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
    <div className="email-adress">
        <div>
            <img src={ props.icon }/>
            <h4>{props.referente}</h4>
            <p>{props.texto}</p>
        </div>    
    </div>
    )
}

export default CardPequeno;