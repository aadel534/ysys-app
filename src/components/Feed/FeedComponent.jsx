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
                return <HouseCard name = {x.name} 
                                    region = {x.region} 
                                    founded = {x.founded}
                                    words = {x.words ? x.words : "No Known Words"}
                                    hasWords = {x.words ? "hasWords" : "noWords"}/>
            case "characters":
                if(x.name.length === 0){        // if name is unknown, use first alias
                    x.name = x.aliases[0];
                }
                return <CharacterCard aliases={x.aliases} 
                                        gender = {x.gender} 
                                        name={x.name}
                                        culture = {x.culture}/>
            case "books":
                return <BookCard name={x.name} 
                            author={x.authors} 
                            releaseDate = {x.released}/>
            default:
                return <p>Loading...</p>
        }
    };
    if (props.results.length == 0) {
        return <div className = {feedClass}>
            <p>No match found</p>
        </div>
    }
    else {
        return <div className={feedClass}>
            {/* TODO - add a placeholder for an empty feed */}
            {/* TODO - build up a list of results */}
            {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
            {props.results.map( (element,index) => 
                <div key = {index} className="card">
                    {renderCard(element)}
            </div>
            )}
        </div>
    }
};