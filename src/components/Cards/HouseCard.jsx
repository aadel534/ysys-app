import React from 'react';
import './Card.css';
import replaceEmptyStringWithUnknown from './../../utils/replaceEmptyStringWithUnknown';

export const HouseCard = (house) => {
    return <div>
        <div className = "container">
            <p className="title">{replaceEmptyStringWithUnknown(house.name)}</p>
            <p className="subtitle">{replaceEmptyStringWithUnknown(house.region)}</p>
            <p className="founded">Founded: {replaceEmptyStringWithUnknown(house.founded)}</p>
            <p className={"words " + house.hasWords}>{house.words}</p>
        </div>
    </div>
};

export default HouseCard;