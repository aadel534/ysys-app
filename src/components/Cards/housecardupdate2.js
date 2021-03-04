import React,{useState,useEffect} from 'react';

function HouseCard() {
    const [house, setHouse] = useState([]);

    useEffect(() => {
        getHouse();
      }, []);

      const getHouse =async () => {
        const response = await fetch("https://anapioficeandfire.com/api/houses/");
        const data = await response.json();
        console.log(data)
        setHouse(data);

      };


    return (
      <div >
       {house.map(house=> (
        <h1>{house.name}</h1>
      ))}
      ;
      </div>
    );
  }
  
  export default HouseCard;

