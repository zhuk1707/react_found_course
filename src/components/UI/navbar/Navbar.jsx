import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="App">
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__link">Home</NavLink>
          <NavLink to="/posts" className="navbar__link">Posts</NavLink>
          <NavLink to="/about" className="navbar__link">About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;