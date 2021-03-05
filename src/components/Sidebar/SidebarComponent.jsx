import React from 'react'
import './SidebarComponent.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = (props) => {

    const searchUpdate = (e) => {
        props.setSearchMode(e.target.value);
    };
    
    let sidebarClass = "sidebar";
    if (props.expanded) {
        sidebarClass += " expanded";
    }
    else{
        sidebarClass += " collapsed";
    }
    // TODO - reflect expanded/collapsed state in sidebar's className
    // TODO - make sure the classNames in the SidebarComponent.css match up with the classes you choose!
    return <div className={sidebarClass}>
        {/* TODO - flesh out this component to include all controls for configuring your data retrieval.
             This must include the category (books/characters/houses)
             [STRETCH] Feel free to add anything else you want, for example:
                * a dropdown to select number of items you want to retrieve
                * a search bar to search for a particular item
             You could even change what you can see in the search bar based on what you are searching for.
             E.g add a dropdown to determine which field you're searching on ("name"/"title"/"alias")
        */}
        {/*
            <Router>
                <div>
                    <Link to = "/characters" replace>Characters</Link>
                    <Link to = "/houses" replace>Houses</Link>
                    <Link to = "/books" replace>Books</Link>
                </div>
            </Router>
        */}
        <div onChange = {searchUpdate}>
            <input type="radio" value="books" name="searchmode" defaultChecked /> Books
            <input type="radio" value="characters" name="searchmode" /> Characters
            <input type="radio" value="houses" name="searchmode" /> Houses
        </div>

    </div>
};