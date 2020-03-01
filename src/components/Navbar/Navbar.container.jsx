import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarWrapper, link } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{ background: 'blue' }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{ background: 'blue' }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{ background: 'blue' }}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        exact
        style={link}
        activeStyle={{ background: 'blue' }}
      >
        Register
      </NavLink>
    </NavbarWrapper>
  );
};

export default Navbar;
