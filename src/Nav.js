import React from 'react'
import { Link } from 'react-router-dom';

const Nav = ({search, setSearch}) => {  
  return (
    <nav className='Nav'>
      <form className='searchForm' action="submit" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search:</label> 
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder='Search'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='post'>Post</Link></li>
        <li><Link to='about'>About</Link></li>
      </ul>


    </nav>
  )
}

export default Nav;