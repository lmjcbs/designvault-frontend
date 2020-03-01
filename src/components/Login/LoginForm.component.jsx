import React from 'react';
import { Form, Input, Label } from '../../utils/styles/global';
import { useFormInput } from '../../utils/hooks/useFormInput.hook';

const LoginForm = () => {
  const email = useFormInput('');
  const password = useFormInput('');

  return (
    <Form>
      <Label htmlFor="email">Email</Label>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        {...email}
      ></Input>
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        {...password}
      ></Input>
      <Input type="submit" value="Login"></Input>
    </Form>
  );
};

export default LoginForm;
