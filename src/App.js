import React, { useState } from 'react';

import { Header } from './Header';
import { Post } from './Post';

export function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Title#02', subTitle: 'Subtitle#02', likes: 20 },
    { id: 2, title: 'Title#01', subTitle: 'Subtitle#01', likes: 15 },
  ]);

  console.log({posts})

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: prevState.length + 1,
          title: `Title#0${prevState.length + 1}`,
          subTitle: `Subtitle#0${prevState.length + 1}`,
          likes: 50
        }
      ])
    }, 2000);
  }

  return (
    <>
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