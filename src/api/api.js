// Api docs: https://anapioficeandfire.com/Documentation

import { getAllByPlaceholderText } from "@testing-library/dom";
// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search
// see cheat sheet for fetch example.

export const getData = async (searchNumber, searchMode, searchQuery, searchParams) => {
    const apiCall = `https://anapioficeandfire.com/api/${searchMode}?${searchParams}=${searchQuery}&page=1&pageSize=${searchNumber}`;
    const response = await fetch(apiCall);
    const data = await response.json();

    if (typeof data === 'string') {     //API returns string on failed api call
        console.log("error catch");
        return [];
    }
    else{
        return data;
    }
};
