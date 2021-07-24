import React, { useState } from 'react';

import { ThemeProvider } from './ThemeContext';

import { Header } from './Header';
import { Post } from './Post';

export function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#02', subTitle: 'Subtitle#02', likes: 20, read: false },
    { id: Math.random(), title: 'Title#01', subTitle: 'Subtitle#01', likes: 15, read: true },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subTitle: `Subtitle#0${prevState.length + 1}`,
        likes: 50,
        read: false
      }
    ]);
  };

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  };

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
};