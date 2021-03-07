import React from 'react';
import './Card.css';
import replaceEmptyStringWithUnknown from './../../utils/replaceEmptyStringWithUnknown';

export const CharacterCard = (character) => {
    return <div>
        <div className = "container">
            <p className = "title">{character.name}</p>
            <p className = "subtitle">{character.gender}</p>
            <p className = "culture">culture: {character.culture}</p>
        </div>
        
    </div>
};

export default CharacterCard