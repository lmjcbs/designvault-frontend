import React from 'react';
import { Row, Col } from '../../utils/styles/global';
import { connect } from 'react-redux';
import {
  PostInput,
  NewPostContainer,
  Header,
  SubmitInput
} from './Home.styles';

import { useFormInput } from '../../utils/hooks/useFormInput.hook';

const PostForm = ({ attributes }) => {
  const post = useFormInput('');
  const { firstName } = attributes;
  const placeholder = `Share something with the world, ${firstName}...`;

  return (
    <NewPostContainer>
      <Header>Create New Post</Header>
      <Row>
        <Col size={1}>
          <PostInput
            type="post"
            name="post"
            placeholder={placeholder}
            contenteditable="true"
            {...post}
          ></PostInput>
        </Col>
      </Row>
      <SubmitInput type="submit" value="Post"></SubmitInput>
    </NewPostContainer>
  );
};

export default connect(
  ({
    authReducer: {
      currentUser: { attributes }
    }
  }) => ({
    attributes
  })
)(PostForm);
