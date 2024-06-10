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



function App() {
  
  return (
    <div className="App">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/postpage'>PostPage</Link></li>

      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/newpost' element={<NewPost/>}/>
        <Route path='/*' element={<Missing/>}/>


        {/* make postapge as nested */}
        <Route path='/postpage' element={<PostPageLayout/>} >
          <Route element={<PostPage/>}/>
          <Route path=':id' element={<Post/>}/>
          <Route path='newpost' element={<NewPost/>}/>
        </Route>
      </Routes>
      {/* <Header/>
      <Nav/>
      <Home/>
      <NewPost/>
      <PostPage/>
      <About/>
      <Missing/>
      <Footer/> */}
    </div>
  );
}

export default App;
