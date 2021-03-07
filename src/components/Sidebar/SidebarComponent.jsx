import React from 'react'
import './SidebarComponent.css';

export const SidebarComponent = (props) => {

    const searchUpdate = (e) => {
        props.setSearchMode(e.target.value);
    };
    const howManyValues=(e)=>{
                props.setHowMany(e.target.value);

    }
    
    let sidebarClass = "sidebar";
    if (props.expanded) {
        sidebarClass += " expanded";
    }
    else{
        sidebarClass += " collapsed";
    }
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
        <div className="radio-box" onChange = {searchUpdate}>

            <div className="radio-section">
                <input type="radio" id="books" value="books" name="searchmode" defaultChecked />
                <label for="books">Books</label>
            </div>

            <div className="radio-section">
                <input type="radio" id="characters" value="characters" name="searchmode" />
                <label for="characters">Characters</label>
            </div>

            <div className="radio-section">
                <input type="radio" id="houses" value="houses" name="searchmode" />
                <label for="houses">Houses</label>
            </div>
        </div>
      How many?  <div onChange={howManyValues}>   <input type="number"min ="10" max="100"/>
</div>

    </div>
};