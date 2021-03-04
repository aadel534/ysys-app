import React from 'react';
import './Card.css';

// TODO - create a component which displays information about Books

// TODO - make sure BookCard is expecting the right props!
export const BookCard = (book) => {
    console.log(book.x);
    return <div>
        <p className = "title">{book.name}</p>
        <p className = "region">{book.author}</p>
    </div>
};

export default BookCard