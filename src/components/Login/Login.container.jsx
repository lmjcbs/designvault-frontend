import React from 'react';
import LoginForm from './LoginForm.component';
import { MainHeader } from '../../utils/styles/global';

const Login = () => {
  return (
    <>
      <MainHeader>Login</MainHeader>
      <LoginForm></LoginForm>
    </>
  );
};

export default Login;
