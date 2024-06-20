import React from 'react'
import Post from './Post'

const Home = ({ posts }) => {  
  return (
    <main className="Home">
      {posts.length ? 
      posts.map((post) => (
        <Post 
          key={post.id} 
          post={post} 
        />
      )) : <p style={{color: '#888888', textAlign: 'center', marginTop: '2rem'}}>No posts yet</p>}
    </main>
  )
}

export default Home