import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/books';
import Nav from './components/nav'
import Catagories from './components/categories'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route exact path="/" element={<Books />} />
      <Route exact path="/categories" element={<Catagories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
