import React from 'react';
import PropTypes from 'prop-types';

import { PostHeader } from './PostHeader';

// Props -> (Properties) -> Propriedades
export function Post({ post, onRemove }) {
  return (
    <>
      <PostHeader 
        onRemove={onRemove}
        post={post}
      />

      <article>
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
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};