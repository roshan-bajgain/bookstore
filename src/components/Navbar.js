import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="wrapper-er">
    <nav className="nav">
      <ul className="link">
        <h1 className="heading">Bookstore CMS</h1>
        <Link to="/">BOOKS</Link>
        <Link to="/calculator">CATEGORIES</Link>
      </ul>
    </nav>
  </div>
);
export default Navbar;
