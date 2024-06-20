import React from 'react'

const NewPost = ({postTitle, setPostTitle, postBody, setPostBody, handleSubmit}) => {
  return (
    <main className="NewPost">
      <form className='newPostForm' action="submit" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          name="title" 
          required
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor="body">Body:</label>
        <textarea 
          name="body" 
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}  
        />
        <button type="submit">Submit</button>
      </form>
    </main>
      
  ) 
}

export default NewPost;