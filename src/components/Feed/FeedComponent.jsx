import React from 'react'
import './FeedComponent.css';
import HouseCard from './../Cards/HouseCard';
import CharacterCard from './../Cards/CharacterCard';
import BookCard from './../Cards/BookCard';

export const FeedComponent = (props) => {

    let feedClass = "feed";
    if (props.expanded) {
        feedClass += " expanded";
    }
    else{
        feedClass += " collapsed";
    }

    const renderCard = (x) => {
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
    };

    return <div className={feedClass}>
        {/* TODO - add a placeholder for an empty feed */}
        {/* TODO - build up a list of results */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
        {props.results.map( (element,index) => 
            <div key = {index}>
                {renderCard(element)}
            </div>
        )}
    </div>
};