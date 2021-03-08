import React from 'react';

// return a different element depending on the value of the search mode
const SearchParameters = (props) => {

    const handleChange = (e) => {
        props.setSearchParams(e.target.value);
    };

    switch (props.searchMode) {
        case "books":
            return (
                <div className="search-params" onChange={handleChange}>
                    <label>search type</label>
                    <select>
                        <option value="name" defaultValue>Name</option>
                        <option value="fromReleaseDate">Released after</option>
                        <option value="toReleaseDate">Released before</option>
                    </select>
                </div>
            );
            break;
        case "characters":
            return (
                <div className="search-params" onChange={handleChange}>
                    <label>search type</label>
                    <select>
                        <option value="name" defaultValue>Name</option>
                        <option value="gender">Gender</option>
                        <option value="culture">Culture</option>
                    </select>
                </div>
            );
            break;
        case "houses":
            return (
                <div className="search-params" onChange={handleChange}>
                    <label>search type</label>
                    <select>
                        <option value="name" defaultValue>Name</option>
                        <option value="region">Region</option>
                        <option value="words">Words</option>
                    </select>
                </div>
            );
            break;
        default:
            break;
    }
};

export default SearchParameters



/*
<div className="result-number" onChange = {numberUpdate}>
    <label>Number of results
    <input list="browsers" name="myBrowser" placeholder="10"/></label>
    <datalist id="browsers">
        <option value="10"/>
        <option value="20"/>
        <option value="50"/>
    </datalist>
</div>
*/