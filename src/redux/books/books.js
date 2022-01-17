import React from 'react';

const BooksPage = () => (
  <div>
    <div className="books-container d-flex">
      <h2>Name of Book</h2>
      <p>The Merchant of Venice</p>
      <button type="button">Delete</button>
    </div>
    <input type="text" name="addBooks" placeholder="Book Title" />
    <button type="button">Add Books</button>
  </div>
);

export default BooksPage;
