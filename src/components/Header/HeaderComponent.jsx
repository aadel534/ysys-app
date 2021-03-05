import React, { useEffect, useState } from 'react';
import HouseCard from '../Cards/HouseCard';
import './HeaderComponent.css';

export const HeaderComponent = (props) => {

    let headerClass = "header";
    if (props.expanded) {
        headerClass += " expanded";
    }
    else{
        headerClass += " collapsed";
    }

    // updates class based on sidebar expansion state
    const updateExpansion = (e) => {
        props.setExpanded(props.expanded ? false : true);
    };

   /* adding search bar functionallity.*/ 
    const [search, setSearch] = useState('');
    const updateSearch = e => { setSearch(e.target.value)};

    const getSearch = e => {
      e.preventDefault();
      props.setSearch(search);
    }

    return <header className={headerClass}>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
        <button className="filter-button" onClick = {updateExpansion} >FILTERS</button>

        <h1>An API of Ice and Fire</h1>

        <form onSubmit={getSearch} className="search-bar"> 
            <input 
              className="search-form" 
              placeholder={"Search..."}
              type="text" value={search} 
              onChange={updateSearch}/> 
            <button className="search-button" type="submit">
              <i className="material-icons">search</i>
            </button>
         </form>
        
    </header>
};