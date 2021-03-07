import React from 'react';
import './Card.css';
import replaceEmptyStringWithUnknown from './../../utils/replaceEmptyStringWithUnknown';

export const CharacterCard = (character) => {
    return <div className="card">
        <p className = "title">{character.name}</p>
        <p className = "region">{character.gender}</p>
    </div>
};

export default CharacterCard