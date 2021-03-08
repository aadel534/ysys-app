import React from 'react';
import './Card.css';
import replaceEmptyStringWithUnknown from './../../utils/replaceEmptyStringWithUnknown';

export const CharacterCard = (character) => {
    return <div>
        <div className = "container">
            <p className = "title">{replaceEmptyStringWithUnknown(character.name)}</p>
            <p className = "subtitle">{replaceEmptyStringWithUnknown(character.gender)}</p>
            <p className = "culture">Culture: {replaceEmptyStringWithUnknown(character.culture)}</p>
        </div>
        
    </div>
};

export default CharacterCard