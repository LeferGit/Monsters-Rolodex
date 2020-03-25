import React from 'react';
import './card.style.css';

export const Card = ({monster}) =>
(
    <div className='card-container'>
        <img alt="monster" src={'https://robohash.org/${monster.id}?set=set1&size=180x180'}></img>
        <h2> {monster.name } </h2>
        <p> {monster.email} </p>
    </div>
)