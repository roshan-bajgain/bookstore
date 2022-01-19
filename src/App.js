import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import CategoriesPage from './redux/categories/categories';
import Navbar from './components/Navbar';
import Books from './components/Books';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/calculator" element={<CategoriesPage />} />
    </Routes>
  </>

);
export default App;
