import './App.css';
import React, { useEffect, useState } from 'react';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { SidebarComponent } from './components/Sidebar/SidebarComponent';
import { FeedComponent } from './components/Feed/FeedComponent';
import { getData } from './api/api';

function App() {

    const [expanded, setExpanded] = useState(true);
    const [feedResults, setFeedResults] = useState([]);
    const [searchMode, setSearchMode] = useState("books");
    const [search, setSearch] = useState("");

    useEffect( () => {
        getData(searchMode, search) 
        .then(data => setFeedResults(data));
    } ,[searchMode, search]);

    // TODO - this is the "main" component for our app, and it will include all the global state that we care about
    //  This should include things like:
    //  * the sidebar expanded state
    //  * the selected category (books/characters/houses)
    //  * the feed results

    // TODO [STRETCH] - This could also include
    //  * the search term (if there is one)
    //  * whether the app is fetching data (loading)
    //  * any additional filters (number of results/filter terms in query string)

    // TODO [STRETCH] - implement loading state and pass to FeedComponent

    // TODO - pass in expanded sidebar state to components that need to know about it/update it.
    return (
        <div className="app">
            <HeaderComponent    search = {search} setSearch = {setSearch} expanded = {expanded} setExpanded = {setExpanded} expanded = {expanded}/>
            <SidebarComponent   expanded = {expanded} searchMode = {searchMode} setSearchMode = {setSearchMode}/>
            <FeedComponent      expanded = {expanded} searchMode = {searchMode} results={feedResults}/>
        </div>
    );
}

export default App;
