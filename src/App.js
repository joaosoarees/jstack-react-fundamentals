import React from 'react';

import { Header } from './Header';
import { Post } from './Post';

export function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title: 'Título da notícia 01',
          subTitle: 'Subtítulo da notícia 01'
        }}
      />

      <Post
        likes={50}
        post={{
          title: 'Título da notícia 02',
          subTitle: 'Subtítulo da notícia 02'
        }}
      />
    </>
  );
};