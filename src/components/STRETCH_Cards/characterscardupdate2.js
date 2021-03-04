import React,{useState,useEffect} from 'react';

function CharactersCard() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
      }, []);
    const getCharacters= async () => {
        const response = await fetch("https://anapioficeandfire.com/api/characters/");
        const data = await response.json();
        console.log(data)
        setCharacters(data);

      };

 



    return (
<div>       

{characters.map(character => (
<<<<<<< Updated upstream
        <h1>{character.aliases}</h1>
=======
        <h1>{character.alias}</h1>
>>>>>>> Stashed changes
      ))}
      ;
      </div>
    );
  }
  
  export default CharactersCard;
  
