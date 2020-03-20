import React from 'react';

export const News = (props) => {
  const { title, body } = props.article;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
