import React from "react";
import Book from "./book";

function BookList(props) {

    return (
        <div>
            {props.books.map((book) => (
                <Book key={book.id} book={book} addBook={props.addBook} bookList />
            ))}
        </div>
    );
}

export default BookList;