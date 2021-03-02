import "./App.css";
import { useEffect, useState } from "react";
import HouseCard from "./components/HouseCard";
import CharactersCard from "./components/CharactersCard"
import BooksCard from "./components/BooksCard";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
     <div>
       <Nav/>
       <Switch>
       <Route path ="/house" component={HouseCard}/>
       <Route path ="/characters" component={CharactersCard}/>
       <Route path ="/books" component={BooksCard}/>
      </Switch>
      </div>    
      </Router>

  );
}

export default App;
