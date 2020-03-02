import React from 'react';
import RegisterForm from './RegisterForm.component';
import { Redirect, useLocation } from 'react-router';
import { connect } from 'react-redux';

const Register = ({ isAuthenticated }) => {
  const location = useLocation();
  // redirects user to previous PrivateRoute if authenticated
  const { from } = location.state || { from: { pathname: '/' } };
  return isAuthenticated ? (
    <Redirect to={{ pathname: from.pathname }} />
  ) : (
    <RegisterForm></RegisterForm>
  );
};

export default connect(({ authReducer: { isAuthenticated } }) => ({
  isAuthenticated
}))(Register);
