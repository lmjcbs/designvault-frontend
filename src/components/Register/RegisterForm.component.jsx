import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Label, MainHeader } from '../../utils/styles/global';
import { useFormInput } from '../../utils/hooks/useFormInput.hook';
import { userRegisterFetchAction } from '../../actions/Actions';

const RegisterForm = ({ userRegisterFetchAction }) => {
  const email = useFormInput('');
  const password = useFormInput('');
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const passwordConfirmation = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegisterFetchAction({
      user: {
        email: email.value,
        first_name: firstName.value,
        last_name: lastName.value,
        password: password.value,
        password_confirmation: passwordConfirmation.value
      }
    });
  };

  return (
    <>
      <MainHeader>Create an Account</MainHeader>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          {...email}
        ></Input>
        <br />
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          name="email"
          placeholder="First Name"
          {...firstName}
        ></Input>
        <br />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          name="email"
          placeholder="Last Name"
          {...lastName}
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
        <br />
        <span>Already have an account?</span>
        <a href="/login">Log in</a>
      </Form>
    </>
  );
};

export default connect(null, { userRegisterFetchAction })(RegisterForm);
