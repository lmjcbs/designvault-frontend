import React from 'react';
import PostForm from './PostForm.component';
import Feed from './Feed.container';

const Home = () => {
  return (
    <>
      <h1>Protected Page</h1>
      <PostForm></PostForm>
      <Feed></Feed>
    </>
  );
};

export default Home;
