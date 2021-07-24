import React from 'react';
import PropTypes from 'prop-types';

// Props -> (Properties) -> Propriedades
export function Post({ post: { title, subTitle }, likes }) {
  return (
    <>
      <article>
        <strong>{title}</strong> <br />
        <small>{subTitle}</small> <br />
        Likes: {likes / 2}
      </article>
      <br />
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
};