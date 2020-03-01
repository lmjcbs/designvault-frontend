import React from 'react';
import { Form, Input, Label } from '../../utils/styles/global';
import { useFormInput } from '../../utils/hooks/useFormInput.hook';

const RegisterForm = () => {
  const email = useFormInput('');
  const password = useFormInput('');
  const passwordConfirmation = useFormInput('');

  return (
    <Form>
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
      <Label htmlFor="passwordConfirmation">Confirm Password</Label>
      <Input
        type="password"
        name="passwordConfirmation"
        placeholder="Enter Password Again"
        {...passwordConfirmation}
      ></Input>
      <br />
      <Input type="submit" value="Register"></Input>
    </Form>
  );
};

export default RegisterForm;
