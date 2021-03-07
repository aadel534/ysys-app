// Api docs: https://anapioficeandfire.com/Documentation

import { getAllByPlaceholderText } from "@testing-library/dom";
// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search
// see cheat sheet for fetch example.

export const getData = async (searchMode, searchQuery, searchNumber) => {
    const apiCall = `https://anapioficeandfire.com/api/${searchMode}?name=${searchQuery}&pageSize=${searchNumber}`;
    const response = await fetch(apiCall);
    const data = await response.json();
    return data;
};
