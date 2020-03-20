import React from 'react';
import { Post } from './Home.styles';
import { Row, Col } from '../../utils/styles/global';

const FeedPost = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.';
  return (
    <Post>
      <Row>
        <Col size={1}>Post Creator</Col>
      </Row>
      <hr />
      <Row>
        <Col size={1}>{lorem}</Col>
      </Row>
      <hr />
      <Row>
        <Col size={1}>Like / Leave a Comment</Col>
      </Row>
    </Post>
  );
};

export default FeedPost;
