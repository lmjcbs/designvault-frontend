import React from 'react';
import { PostInput, NewPostContainer, Header } from './Home.styles';
import { useFormInput } from '../../utils/hooks/useFormInput.hook';

const PostForm = () => {
  const post = useFormInput('');
  const placeholder = `Share something with the world, name...`;

  return (
    <NewPostContainer>
      <Header>Create New Post</Header>
      <PostInput
        type="post"
        name="email"
        placeholder={placeholder}
        {...post}
      ></PostInput>
      <input type="submit"></input>
    </NewPostContainer>
  );
};

export default PostForm;
