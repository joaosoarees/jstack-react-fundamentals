import React from 'react';
import PropTypes from 'prop-types';

import { PostHeader } from './PostHeader';

import styles from './Post.scss';
import * as S from './styles';

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

      <S.Subtitle>{post.subTitle}</S.Subtitle>
      <S.Rate>Likes: {post.likes}</S.Rate>
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