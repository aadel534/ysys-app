import React from 'react';
import './Card.css';

// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = (character) => {
    return <div>
        <p className = "title">{character.aliases}</p>
        <p className = "region">{character.gender}</p>
    </div>
};

export default CharacterCard