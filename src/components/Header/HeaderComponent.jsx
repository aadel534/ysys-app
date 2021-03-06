import React, { useEffect, useState } from 'react';
import './HeaderComponent.css';
import SearchParameters from './SearchParameters';

export const HeaderComponent = (props) => {

    // and object containing search bar placeholders for each type of search
    const searchPlaceholders = {
      "booksname": "eg. A Game of Thrones",
      "bookstoReleaseDate": "eg. 2005-01-01",
      "booksfromReleaseDate":"eg. 2005-01-01",
      "charactersname": "eg. Jon Snow",
      "charactersgender":"eg. female",
      "charactersculture":"eg. Braavosi",
      "housesname": "eg. House Moss",
      "housesregion": "eg. The North",
      "houseswords": "eg. Winter is Coming"
    };

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

   // adding search bar functionality 
    const [search, setSearch] = useState('');
    const handleChange = e => { setSearch(e.target.value)};

    const handleSubmit = e => {
      e.preventDefault();
      props.setSearch(search);    //updates the search hook, causing a rerender
      setSearch("");
    }

    return <header className={headerClass}>
        <button className="filter-button" onClick = {updateExpansion} >FILTERS</button>

        <h1>An API of Ice and Fire</h1>

        <div className="search-fields">
          <SearchParameters searchMode= {props.searchMode} setSearchParams = {props.setSearchParams}/>

          <form onSubmit={handleSubmit} className="search-bar"> 
              <input 
                className="search-form" 
                placeholder={searchPlaceholders[props.searchMode + props.searchParams]}
                type="text" value={search} 
                onChange={handleChange}/> 
          </form>
        </div>
        
    </header>
};