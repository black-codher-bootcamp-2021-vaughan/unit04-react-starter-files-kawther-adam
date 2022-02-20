 import React from 'react';

 function Book(props) {
   console.log(props)
 const { 
   book: {
    id,
  // saleInfo: {retailPrice},
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: {
        thumbnail
      }
    }
  }
} = props;

return (
<div className="book">
  <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="thumbnail"/>
  <div>
    <h2 >{props.book.volumeInfo.title}</h2>
  </div>
</div>
)}
export default Book;


