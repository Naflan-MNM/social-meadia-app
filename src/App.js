import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Footer from './Footer';
import Missing from './Missing';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Post from './Post';
import PostPageLayout from './PostPageLayout';
import { useState } from 'react';



function App() {
const [search, setSearch] = useState('');
  
  return (
    <div className="App">
      <Header/>
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<PostPageLayout/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/new" element={<NewPost/>}/>
        <Route path="/:postId" element={<Post/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      
      <Home/>
      <NewPost/>
      <PostPage/>
      <About/>
      <Missing/>
      <Footer/>
    </div>
  );
}

export default App;
