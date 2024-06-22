import React from 'react'
import { useNavigate  } from 'react-router-dom'

const Post = ({ post}) => {
  const navigate = useNavigate();//you must call this useNavigate function at the top, not a inside the function
  const handleClick = ()=>{
    navigate ('postpage')
      
    }
  return (
    <article className="post">
     <h1 onClick={()=>handleClick()}>{post.title}</h1>
      <p className='postDate'>{post.datetime}</p>
      <p onClick={()=>handleClick()}className='postBody'>{(post.body).length <=25 ? post.body : `${post.body.substring(0,25)}...`}</p>
    </article>
  )
}

export default Post