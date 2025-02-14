import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>      
      <Link to="/about">
        <div>About</div>
      </Link>      
      <Link to="/shop">
        <div>Shop</div>
      </Link>      
    </div>
  )
}

export default Nav;