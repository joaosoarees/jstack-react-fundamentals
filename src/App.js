import React from 'react';

import { Post } from './Post';

export function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da Semana</h2>

      <hr />

      <Post
        post={{
          title: 'Título da notícia 01',
          subTitle: 'Subtítulo da notícia 01'
        }}
      />

      <Post
        post={{
          title: 'Título da notícia 02',
          subTitle: 'Subtítulo da notícia 02'
        }}
      />
    </>
  );
};