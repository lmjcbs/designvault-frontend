import React from 'react';
import { connect } from 'react-redux';
import FeedPost from './FeedPost.component';
import Button from '@material-ui/core/Button';

const Feed = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <FeedPost></FeedPost>
      <FeedPost></FeedPost>
      <FeedPost></FeedPost>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(
  ({
    authReducer: {
      currentUser: { attributes }
    }
  }) => ({
    attributes
  })
)(Feed);