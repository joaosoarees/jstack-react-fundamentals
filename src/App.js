import React from 'react';

import { Header } from './Header';
import { Post } from './Post';

const posts = [
  {
    title: 'Title#01',
    subTitle: 'Subtitle#01',
    likes: 15,
  },
  {
    title: 'Title#01',
    subTitle: 'Subtitle#01',
    likes: 20,
  },
  {
    title: 'Title#01',
    subTitle: 'Subtitle#01',
    likes: 30,
  },
];

export function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={Math.random()}
          likes={post.likes}
          post={{
            title: post.title,
            subTitle: post.subTitle
          }}
        />
      ))}
    </>
  );
};