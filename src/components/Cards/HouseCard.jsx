import React from 'react';
import './Card.css';

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!
export const HouseCard = (house) => {
    return <div>
        <p className="title">{house.name}</p>
        <p className="region">{house.region}</p>
    </div>
};

export default HouseCard