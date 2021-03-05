import React from 'react'
import './FeedComponent.css';
import HouseCard from './../Cards/HouseCard';
import CharacterCard from './../Cards/CharacterCard';
import BookCard from './../Cards/BookCard';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = (props) => {

    let feedClass = "feed";
    let card = "";
    if (props.expanded) {
        feedClass += " expanded";
    }
    else{
        feedClass += " collapsed";
    }

    const renderCard = (x) => {
        console.log(props.searchMode);
        switch (props.searchMode) {
            case "houses":
                return <HouseCard name = {x.name} region = {x.region} founded = {x.founded}/>
                break;
            case "characters":
                return <CharacterCard aliases={x.aliases} gender = {x.gender}/>
                break;
            case "books":
                return <BookCard x={x} name={x.name} author={x.authors} releaseDate = {x.released}/>
                break;
            default:
                return <p>Loading...</p>
                break;
        }
        
    }

    return <div className={feedClass}>
        {/* TODO - add a placeholder for an empty feed */}
        {/* TODO - build up a list of results */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
        {props.results.map( (x,i) => 
            <div key = {i}>{/* */}
                {renderCard(x)}

                
            </div>
        )}
        
    </div>
};