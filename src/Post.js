import React from 'react';
import PropTypes from 'prop-types';

import { PostHeader } from './PostHeader';

import styles from './Post.scss';

// Props -> (Properties) -> Propriedades
export function Post({ post, onRemove }) {
  return (
    <article 
      className={
        post.removed
          ? styles.postDeleted
          : styles.post
      }
    >
      <PostHeader 
        onRemove={onRemove}
        post={post}
      />
      <small>{post.subTitle}</small> <br />
      Likes: {post.likes}
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};