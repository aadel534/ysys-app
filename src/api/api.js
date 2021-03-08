// Api docs: https://anapioficeandfire.com/Documentation

import { getAllByPlaceholderText } from "@testing-library/dom";

export const getData = async (searchNumber, searchMode, searchQuery, searchParams, pageNumber) => {
    const apiCall = `https://anapioficeandfire.com/api/${searchMode}?${searchParams}=${searchQuery}&page=${pageNumber}&pageSize=${searchNumber}`;
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
