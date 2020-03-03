import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AuthenticateUser } from '../../actions/Actions';

const Auth = ({ AuthenticateUser }) => {
  useEffect(() => {
    AuthenticateUser();
  });
  return <></>;
};

export default connect(null, { AuthenticateUser })(Auth);
