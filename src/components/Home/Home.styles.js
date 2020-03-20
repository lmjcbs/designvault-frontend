import styled from 'styled-components';

export const PostInput = styled.textarea`
  width: 100%;
  height: 70px;
  background-color: transparent;
  resize: none;
  border: none;
  overflow: auto;
  outline: none;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
`;

export const SubmitInput = styled.input`
  float: right;
`;

export const NewPostContainer = styled.div`
  width: 100%;
  padding: 0px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Header = styled.h3`
  font-size: 20px;
  background-color: lightcoral;
`;

export const ProfileWrapper = styled.div`
  text-align: center;
  background-color: white;
  margin-top: 100px;
  height: 300px;
  width: 100%;
  padding: 0px;
`;

export const ActivityWrapper = styled.div`
  background-color: white;
  margin-top: 100px;
  height: 500px;
  width: 100%;
  padding: 0px;
  text-align: center;
`;

export const Post = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 0px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Search = styled.div`
  height: 35px;
  width: 80%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
