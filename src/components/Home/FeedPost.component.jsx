import React from 'react';
import { Post } from './Home.styles';
import { Row, Col } from '../../utils/styles/global';

const FeedPost = ({ post }) => {
  const { poster, content } = post;
  return (
    <Post>
      <Row>
        <Col size={1}>{poster}</Col>
      </Row>
      <hr />
      <Row>
        <Col size={1}>{content}</Col>
      </Row>
      <hr />
      <Row>
        <Col size={1}>Like / Leave a Comment</Col>
      </Row>
    </Post>
  );
};

export default FeedPost;
