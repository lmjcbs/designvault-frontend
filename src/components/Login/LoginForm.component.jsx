import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Label, MainHeader } from '../../utils/styles/global';
import { useFormInput } from '../../utils/hooks/useFormInput.hook';
import { userLoginFetchAction } from '../../actions/Actions';

const LoginForm = ({ userLoginFetchAction }) => {
  const email = useFormInput('');
  const password = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    userLoginFetchAction({
      user: { email: email.value, password: password.value }
    });
  };

  return (
    <>
      <MainHeader>Login</MainHeader>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          {...email}
        ></Input>
        <br />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          {...password}
        ></Input>
        <br />
        <Input type="submit" value="Login"></Input>
        <br />
        <span>Don't have an account?</span>
        <a href="/register">Sign up</a>
      </Form>
    </>
  );
};

export default connect(null, { userLoginFetchAction })(LoginForm);
