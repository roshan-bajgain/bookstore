import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import BooksPage from '../redux/books/books';
import CategoriesPage from '../redux/categories/categories';
import Header from './header';

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Route exact path="/">
        <BooksPage />
      </Route>
      <Route exact path="/categories">
        <CategoriesPage />
      </Route>
    </BrowserRouter>
  </div>
);

export default App;