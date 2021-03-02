import React from 'react'
import './FeedComponent.css';

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = (props) => {
    //console.log(props.results);
    props.results.map(x => console.log(x.url));
    return <div className={'feed'}>
        {/* TODO - add a placeholder for an empty feed */}
        {/* TODO - build up a list of results */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
        {props.results.map( (x,i) => 
            <div key = {i}>
                <p className="title"> {x.name} </p>
                <p className="region"> {x.region} </p>
            </div>
        )}
    </div>
};