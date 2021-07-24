import React from 'react';
import PropTypes from 'prop-types';

// Props -> (Properties) -> Propriedades
export function Post({ post, onRemove }) {
  return (
    <>
      <article>
        <strong>
          {post.read ? <s>{post.title}</s> : post.title}
        </strong>

        <button onClick={() => onRemove(post.id)}>
          Remover
        </button> <br />

        <small>{post.subTitle}</small> <br />

        Likes: {post.likes}
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
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};