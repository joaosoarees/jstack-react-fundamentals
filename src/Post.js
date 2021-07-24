import React from 'react';
import PropTypes from 'prop-types';

// Props -> (Properties) -> Propriedades
export function Post({ post, likes, onRemove }) {
  return (
    <>
      <article>
        <strong>{post.title}</strong>
        
        <button onClick={() => onRemove(post.id)}>
          Remover
        </button> <br />

        <small>{post.subTitle}</small> <br />

        Likes: {likes}
      </article>
      <br />
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};