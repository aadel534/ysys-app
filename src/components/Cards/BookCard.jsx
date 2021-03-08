import React from 'react';
import './Card.css';

export const BookCard = (book) => {

    // expecting an input of the format 1996-08-01T00:00:00
    const formatDate = (dateString) => {
        let string = "";
        if (typeof dateString === 'undefined') {
            string = dateString;
        }
        else {
            string += dateString.substring(0,10);
            string = string.replace(/-/g,'/');
        }
        return string;
    }

    return <div>
        <div className="container">
            <p className = "title">{book.name}</p>
            <p className = "subtitle">{book.author}</p>
            <p className = "release-date">{formatDate(book.releaseDate)}</p>
        </div>
    </div>
};

export default BookCard