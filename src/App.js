import React from 'react';

import { Header } from './Header';
import { Post } from './Post';

export function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

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