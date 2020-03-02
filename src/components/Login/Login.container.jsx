import React from 'react';
import LoginForm from './LoginForm.component';
import { MainHeader } from '../../utils/styles/global';
import { Redirect, useLocation } from 'react-router';
import { connect } from 'react-redux';

const Login = ({ isAuthenticated }) => {
  const location = useLocation();

  return isAuthenticated ? (
    <Redirect to={{ pathname: location.state.from.pathname }} />
  ) : (
    <>
      <MainHeader>Login</MainHeader>
      <LoginForm></LoginForm>
    </>
  );
};

const mapStateToProps = (state) => {
  return { isAuthenticated: state.authReducer.isAuthenticated };
};

export default connect(mapStateToProps)(Login);
