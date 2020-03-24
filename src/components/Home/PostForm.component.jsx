import React from 'react';
import { Row, Col } from '../../utils/styles/global';
import { connect } from 'react-redux';
import { addPost } from '../../actions/Actions';

import {
  PostInput,
  NewPostContainer,
  Header,
  SubmitInput
} from './Home.styles';

import { useFormInput } from '../../utils/hooks/useFormInput.hook';

const PostForm = ({ attributes, addPost }) => {
  const post = useFormInput('');
  const { firstName } = attributes;
  const placeholder = `Share something with the world, ${firstName}...`;

  const handleOnClick = () => {
    const data = {
      poster: firstName,
      content: post.value
    };
    console.log(data);
    addPost(data);
  };

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
      <button onClick={handleOnClick}>Post</button>
    </NewPostContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    attributes: state.authReducer.currentUser.attributes
  };
};

export default connect(mapStateToProps, { addPost })(PostForm);
