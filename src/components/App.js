import React from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import BooksPage from '../redux/books/books';
import CategoriesPage from '../redux/categories/categories';


const App = () => (
    <BrowserRouter>
      <div className="wrapper-er">
        <nav className="nav">
          <h1 className="heading">Math Magicians</h1>
          <ul className="link">
            <Link to="/">BOOKS</Link>
            <Link to="/calculator">CATEGORIES</Link>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<BooksPage/>} />
        <Route path="/calculator" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
  export default App;