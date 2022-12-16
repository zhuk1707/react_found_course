import React, {useContext} from 'react';
import {NavLink, Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.setItem('auth', 'false')
  }

  return (
    <nav className='navbar'>
      <div className="App">
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__link">Home</NavLink>
          <NavLink to="/posts" className="navbar__link">Posts</NavLink>
          <NavLink to="/about" className="navbar__link">About</NavLink>
          <NavLink to="/login" className="navbar__link">Login</NavLink>
          <Link to="/login" className="navbar__link" onClick={logout}>Log out ⇒</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;