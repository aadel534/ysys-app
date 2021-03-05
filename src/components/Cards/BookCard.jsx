import React from 'react';
import './Card.css';

export const BookCard = (book) => {
    return <div className="card">
        <p className = "title">{book.name}</p>
        <p className = "region">{book.author}</p>
    </div>
};

export default BookCard