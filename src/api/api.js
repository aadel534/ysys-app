// Api docs: https://anapioficeandfire.com/Documentation

import { getAllByPlaceholderText } from "@testing-library/dom";


// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

/* Code might be useful gor from APIUPDATE
const [house, setHouse] = useState([]);
*/


// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.

export const getData = async (searchMode, searchQuery) => {
    const apiCall = `https://anapioficeandfire.com/api/${searchMode}?name=${searchQuery}`;
    const response = await fetch(apiCall);
    const data = await response.json();
    return data;
};


