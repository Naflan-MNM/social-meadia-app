import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const PostPageLayout = () => {
  return (
    <>
    <Link to='/postpage/1'><h4>post 1</h4></Link>
    <Link to='/postpage/2'><h4>post 2</h4></Link>
    <Link to='/postpage/3'><h4>post 3</h4></Link>
    <Link to='/postpage/newpost'><h4>NewPost</h4></Link>
    <Outlet/>
    </>
  )
}

export default PostPageLayout