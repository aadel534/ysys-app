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
    const [searchQuery, setSearchQuery] = useState("");
    const [searchNumber, setSearchNumber] = useState("12");
    const [searchParams, setSearchParams] = useState("name");
    const [pageNumber, setPageNumber] = useState(1);

    useEffect( () => {
        getData(searchNumber, searchMode, searchQuery, searchParams, pageNumber) 
        .then(data => setFeedResults(data))
    } ,[searchNumber, searchMode, searchQuery, pageNumber]);

    // TODO [STRETCH] - This could also include
    //  * whether the app is fetching data (loading)
    // TODO [STRETCH] - implement loading state and pass to FeedComponent
    return (
        <div className="app">
            <HeaderComponent    
                search = {searchQuery} 
                setSearch = {setSearchQuery}
                searchMode = {searchMode} 
                expanded = {expanded} 
                setExpanded = {setExpanded} 
                expanded = {expanded}
                searchParams = {searchParams}
                setSearchParams = {setSearchParams}/>
            <SidebarComponent   
                expanded = {expanded}
                searchMode = {searchMode} 
                setSearchMode = {setSearchMode}
                setSearchNumber = {setSearchNumber}
                pageNumber = {pageNumber}
                setPageNumber = {setPageNumber}/>
            <FeedComponent      
                expanded = {expanded} 
                searchMode = {searchMode} 
                results = {feedResults}/>
        </div>
    );
}

export default App;
