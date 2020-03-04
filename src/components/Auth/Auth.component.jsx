import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/Actions';

const Auth = ({ authenticateUser }) => {
  useEffect(() => {
    authenticateUser();
  });
  return <></>;
};

export default connect(null, { authenticateUser })(Auth);
