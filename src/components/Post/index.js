import React from 'react';
import PropTypes from 'prop-types';

import { PostHeader } from './PostHeader';

import * as S from './styles';

// Props -> (Properties) -> Propriedades
export function Post({ post, onRemove }) {
  return (
    <S.Container removed={post.removed}>
      <PostHeader
        onRemove={onRemove}
        post={post}
      />

      <S.Subtitle>{post.subTitle}</S.Subtitle>
      <S.Rate>Likes: {post.likes}</S.Rate>
    </S.Container>
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