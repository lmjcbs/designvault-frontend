import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarWrapper, NavbarButton, link } from './Navbar.styles';
import { connect } from 'react-redux';
import { userLogoutAction } from '../../actions/Actions';
import { Row, Col } from '../../utils/styles/global';
import SearchBar from '../Home/SearchBar.component';

const Navbar = ({ isAuthenticated, userLogoutAction }) => {
  return (
    <NavbarWrapper>
      <Row>
        <Col size={1}>
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{ background: 'blue' }}
          >
            Home
          </NavLink>
        </Col>
        <Col size={1}>{isAuthenticated ? <SearchBar /> : null}</Col>
        <Col size={1}>
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
        </Col>
      </Row>
    </NavbarWrapper>
  );
};

export default connect(
  ({ authReducer: { isAuthenticated } }) => ({
    isAuthenticated
  }),
  { userLogoutAction }
)(Navbar);
