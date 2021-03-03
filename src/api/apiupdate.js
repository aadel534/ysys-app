import "./App.css";
import { useEffect, useState } from "react";
import HouseCard from "./components/HouseCard";

function App() {
  //CALL THE API
  useEffect(() => {
    getHouses();
  }, []);

  //STATES TO HOLD DATA
  const [house, setHouse] = useState([]);

  //API FOR HOUSES
  const getHouses = async () => {
    const response = await fetch("https://anapioficeandfire.com/api/houses/");
    const data = await response.json();
    setHouse(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <div>
          <input type="radio" name="options" value="Characters" />
          Characters
        </div>
        <div>
          <input type="radio" name="options" value="Houses" />
          Houses
        </div>
        <input type="radio" name="options" value="Books" />
        Books
        <div>
          Number of results
          <input type="number" name="options" min="5" max="50" />
        </div>
        <input type="submit"></input>
      </form>
      {house.map((house) => (
        <HouseCard houses={house.name} />
      ))}
      ;
    </div>
  );
}

export default App;
