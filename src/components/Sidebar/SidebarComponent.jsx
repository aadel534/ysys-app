import React from 'react'
import './SidebarComponent.css';

export const SidebarComponent = (props) => {

    const searchUpdate = (e) => {
        props.setSearchMode(e.target.value);
    };

    const numberUpdate = (e) => {
        console.log(e.target.value);
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
    return <div className={sidebarClass}>
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
            <label><p>Results per page</p></label>
            <select>
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </select>
            
        </div>

        <div className="pagination">
            <a href="#" className="page previous round" id="previous-page" onClick={handlePagination}>&#8249;</a>
            <p>Page {props.pageNumber}</p>
            <a href="#" className="page next round" id="next-page"onClick={handlePagination}>&#8250;</a>
        </div>
    </div>
};