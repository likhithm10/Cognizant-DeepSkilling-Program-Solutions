import React from 'react';

export default function BookDetails(props) {
  return (
    <div>
      {props.books.map((book,index) => (
        <div key={index}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
}
