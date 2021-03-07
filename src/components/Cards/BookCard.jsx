import React from 'react';
import './Card.css';

export const BookCard = (book) => {
    return <div>
        <div className="container">
            <p className = "title">{book.name}</p>
            <p className = "subtitle">{book.author}</p>
            <p className = "release-date">{book.releaseDate}</p>
        </div>
    </div>
};

export default BookCard