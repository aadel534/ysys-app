import React,{useState,useEffect} from 'react';
function BooksCard() {
  
 

 

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
      }, []);
    const getBooks= async () => {
        const response = await fetch("https://anapioficeandfire.com/api/books/");
        const data = await response.json();
        console.log(data)
        setBooks(data);

      };

 



    return (
<div>       

{books.map(books => (
        <h1>{books.name}</h1>
      ))}
      ;
      </div>
    );
  }
  
  export default BooksCard;
  
