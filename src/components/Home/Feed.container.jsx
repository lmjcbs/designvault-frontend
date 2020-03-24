import React from 'react';
import { connect } from 'react-redux';
import FeedPost from './FeedPost.component';

const Feed = ({ posts }) => {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <FeedPost post={post}></FeedPost>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer.posts
  };
};

export default connect(mapStateToProps)(Feed);
