import React from 'react'
import './SidebarComponent.css';

export const SidebarComponent = (props) => {

    const searchUpdate = (e) => {
        props.setSearchMode(e.target.value);
    };

    const numberUpdate = (e) => {
        props.setSearchNumber(e.target.value);
    };

    const handlePagination = (e) => {
        if (e.target.id == "next-page") {
            console.log(`from ${props.pageNumber} to ${props.pageNumber + 1}`);
            props.setPageNumber(props.pageNumber+1);
        }
        else if (e.target.id == "previous-page" && props.pageNumber != 1) {
            console.log(`from ${props.pageNumber} to ${props.pageNumber - 1}`);
            props.setPageNumber(props.pageNumber-1);
        }
        else {
            console.log("invalid pagination request");
        }
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
                <label htmlFor="books">Books</label>
            </div>
            <div className="radio-section">
                <input type="radio" id="characters" value="characters" name="searchmode" />
                <label htmlFor="characters">Characters</label>
            </div>
            <div className="radio-section">
                <input type="radio" id="houses" value="houses" name="searchmode" />
                <label htmlFor="houses">Houses</label>
            </div>
        </div>
        <div className="result-number" onChange = {numberUpdate}>
            <label>Results per page
            <input list="browsers" name="myBrowser" placeholder="10"/></label>
            <datalist id="browsers">
                <option value="10"/>
                <option value="20"/>
                <option value="50"/>
            </datalist>
        </div>
        <div className="pagination">
            <p>Page: {props.pageNumber}</p>
            <a href="#" className="page previous round" id="previous-page" onClick={handlePagination}>&#8249;</a>
            <a href="#" className="page next round" id="next-page"onClick={handlePagination}>&#8250;</a>
        </div>
    </div>
};