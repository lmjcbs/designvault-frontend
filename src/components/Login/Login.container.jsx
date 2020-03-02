import React from 'react';
import LoginForm from './LoginForm.component';
import { Redirect, useLocation } from 'react-router';
import { connect } from 'react-redux';

const Login = ({ isAuthenticated }) => {
  const location = useLocation();
  // redirects user to previous PrivateRoute once authenticated
  const { from } = location.state || { from: { pathname: '/' } };
  return isAuthenticated ? (
    <Redirect to={{ pathname: from.pathname }} />
  ) : (
    <LoginForm></LoginForm>
  );
};

export default connect(({ authReducer: { isAuthenticated } }) => ({
  isAuthenticated
}))(Login);
