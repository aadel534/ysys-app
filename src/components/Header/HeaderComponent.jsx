import React, { useEffect, useState } from 'react';
import HouseCard from '../Cards/HouseCard';
import './HeaderComponent.css';

// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = (props) => {

    let headerClass = "header";
    if (props.expanded) {
        headerClass += " expanded";
    }
    else{
        headerClass += " collapsed";
    }

    const updateExpansion = (e) => {
        props.setExpanded(props.expanded ? false : true);
    };

    const [counter, setCounter] = useState(0);

   /* adding search bar functionallity.*/ 

    useEffect(() =>  {
    console.log("Effect has been run");
    }, []);


    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')
    const updateSearch = e => { setSearch(e.target.value);
        console.log(search);  
    };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);

    }

    return <header className={headerClass}>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
        I'm the header component
        <button onClick = {updateExpansion} >SIDEBAR</button>

        <form onSubmit={getSearch} className="search-bar"> 
        {search}
           <input 
             className="search-form" 
             placeholder={"Type in here..."}
             type="text" value={search} 
             onChange={updateSearch}/> 
           <button className="search-button" type="submit"> SEARCH </button>
         </form>
        
    </header>
};