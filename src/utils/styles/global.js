import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

export const Input = styled.input`
  font-size: 18px;
  color: blue;
`;

export const Label = styled.label`
  font-size: 18px;
  color: black;
`;

export const MainHeader = styled.h1`
  font-size: 24px;
  color: red;
`;

export const Form = styled.form``;
