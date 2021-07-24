import React from 'react';

// Props -> (Properties) -> Propriedades
export function Post({ post: { title, subTitle } }) {
  return (
    <>
      <article>
        <strong>{title}</strong> <br />
        <small>{subTitle}</small>
      </article>
      <br />
    </>
  );
};