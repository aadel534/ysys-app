import React from 'react';
import './Card.css';

export const CharacterCard = (character) => {
    return <div className="card">
        <p className = "title">{character.aliases}</p>
        <p className = "region">{character.gender}</p>
    </div>
};

export default CharacterCard