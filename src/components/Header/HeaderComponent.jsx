import React, { useEffect, useState } from 'react';
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

   /* adding search bar functionallity.*/

    const [counter, setCounter] = useState(0); 

    

    useEffect(() =>  {
    console.log("Effect has been run");
    }, []);

      /* adding search bar functionallity.*/
    const [searchMode, setSearchMode] = useState('');
    const [query, setQuery] = useState('')
    const updateSearchMode = e => { setSearchMode(e.target.value);
        console.log(searchMode);  
    };

    const getSearchMode = e => {
      e.preventDefault();
      setQuery(searchMode);

    }

    return <header className={headerClass}>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
        I'm the header component
        <button onClick = {updateExpansion} >SIDEBAR</button>

        <form onSubmit={getSearchMode} className="search-bar"> 
           <input className="search-form" type="text" value={searchMode} onChange={updateSearchMode}/> 
           <button className="search-button" type="submit"> SEARCH </button>
         </form>
        
    </header>
};