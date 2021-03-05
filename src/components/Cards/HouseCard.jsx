import React from 'react';
import './Card.css';
import replaceEmptyStringWithUnknown from './../../utils/replaceEmptyStringWithUnknown';

export const HouseCard = (house) => {
    return <div className="card">
        <p className="title">{house.name}</p>
        <p className="region">{house.region}</p>
        <p className="founded">{house.founded}</p>
    </div>
};

export default HouseCard;