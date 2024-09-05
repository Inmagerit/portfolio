// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
