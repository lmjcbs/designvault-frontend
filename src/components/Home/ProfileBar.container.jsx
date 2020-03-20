import React from 'react';
import { ProfileWrapper } from './Home.styles';
import { connect } from 'react-redux';

const ProfileBar = ({ attributes }) => {
  const { firstName, lastName, title, bio } = attributes;

  return (
    <ProfileWrapper>
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>{title}</h3>
      <h4>{bio}</h4>
    </ProfileWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    attributes: state.authReducer.currentUser.attributes
  };
};

export default connect(mapStateToProps)(ProfileBar);
