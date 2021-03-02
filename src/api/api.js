// Api docs: https://anapioficeandfire.com/Documentation

// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.
export const getData = async (searchMode) => {
    const apiCall = `https://anapioficeandfire.com/api/${searchMode}/`;
    const response = await fetch(apiCall);
    const data = await response.json();
    return data;
};
