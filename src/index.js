import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Books from './components/books';
import nav from './components/nav'
import catagories from './components/categories'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav />
      <Routes>
      <Route exact path="/" element={<Books />} />
      <Route exact path="/categories" element={<catagories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
