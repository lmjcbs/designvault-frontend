import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarWrapper, NavbarButton, link } from './Navbar.styles';
import { connect } from 'react-redux';
import { userLogoutAction } from '../../actions/Actions';

const Navbar = ({ isAuthenticated, userLogoutAction }) => {
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
      {isAuthenticated ? (
        <NavbarButton onClick={userLogoutAction}>Logout</NavbarButton>
      ) : (
        <>
          <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{ background: 'blue' }}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            exact
            style={link}
            activeStyle={{ background: 'blue' }}
          >
            Register
          </NavLink>
        </>
      )}
    </NavbarWrapper>
  );
};

export default connect(
  ({ authReducer: { isAuthenticated } }) => ({
    isAuthenticated
  }),
  { userLogoutAction }
)(Navbar);
