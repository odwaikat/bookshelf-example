import React from 'react';

const Book = ({book}) => (
    <div className="book" >
        <div className="book__image">
            <img src={require(`static/assets${book.image}`)} alt={book.title} width={180} />
        </div>
        <div>
            <h3 className="book__title">
                {book.title}
            </h3>
            <div>
                {book.author}
            </div>
            <div>
                {book.reviewedBy}
            </div>
        </div>
    </div>
);


export default Book;