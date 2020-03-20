import React from 'react';
import PostForm from './PostForm.component';
import Feed from './Feed.container';
import { Row, Col } from '../../utils/styles/global';
import ProfileBar from './ProfileBar.container';
import ActivityBar from './ActivityBar.container';

const Home = () => {
  return (
    <>
      <Row>
        <Col size={1}>
          <ProfileBar></ProfileBar>
        </Col>
        <Col size={2}>
          <h1>Protected Page</h1>
          <PostForm></PostForm>
          <Feed></Feed>
        </Col>
        <Col size={1}>
          <ActivityBar></ActivityBar>
        </Col>
      </Row>
    </>
  );
};

export default Home;
