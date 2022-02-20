import React from 'react';
import Book from './components/Book';
import bookList from './models/books.json';


const App = () => {
  console.log(bookList);
   return (bookList.map(bookItem => <Book key={bookItem.id} book={bookItem}/>))
}

export default App;


