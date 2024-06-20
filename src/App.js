import React from 'react'
import Header from './Header';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Post from './Post';
import PostPageLayout from './PostPageLayout';
import { useState } from 'react';
import {format} from 'date-fns';
import HomeWithFooter from './HomeWithFooter ';


function App() {
  /* this is for search box */ 
const [search, setSearch] = useState('');
/* this is for posts */
const [posts, setPosts] = useState([
  {
    id: 1,
    title: 'Hello World',
    datetime: 'july 1, 2021 11:25:14 AM',
    body: 'This is a test post',
  },
  {
    id: 2,
    title: 'My first post',
    datetime: 'july 25, 2021 12:05:14 PM',
    body: 'Made a very cool post',
  },
  {
    id: 3,
    title: 'my second post',
    datetime: 'june 1, 2022 08:25:14 AM',
    body: 'Our Edu-Hub webapplication is awesome',
  },
  {
    id: 4,
    title: 'my third post',
    datetime: 'june 25, 2022 11:25:14 AM',
    body: 'ETH 2.0 will beat Bitcoin',
  }
] || []);

/* new posthandler */
/* get the text as title and body */
const [postTitle, setPostTitle] = useState('');
const [postBody, setPostBody] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  const newPost = {
    id: posts.length + 1,
    title: postTitle,
    datetime: format(new Date().toLocaleString(),'MMMM dd, yyyy pp'),
    body: postBody,
  };
  setPosts([...posts, newPost]);
  setPostTitle('');
  setPostBody('');
}
  
  return (
    <div className="App">
      <Header/>
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <HomeWithFooter
              posts={posts}
            />
          }
        />
        <Route path="/post" element={<PostPageLayout/>}/>
        <Route path="/about" element={<About/>}/>
        <Route 
          path="/new" 
          element={
            <NewPost
              handleSubmit={handleSubmit} 
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route path="/:postId" element={<Post/>}/>
        <Route path="*" element={<Missing/>}/>
        <Route 
          path='postpage'
          element={<PostPage/>}
        /> 
      </Routes> 
      
    </div>
  );
}

export default App;
