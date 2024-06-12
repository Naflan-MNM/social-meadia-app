import React from 'react'

const NewPost = ({postTitle, setPostTitle, postBody, setPostBody, handleSubmit}) => {
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input 
        type="text" 
        id="title" 
        name="title" 
        required
        value={postTitle}
        onChange={setPostTitle}
      />
      <label htmlFor="body">Body:</label>
      <textarea 
        id="body" 
        name="body" 
        value={postBody}
        onChange={setPostBody}  
      />
      <button type="submit">Submit</button>
    </form>
  ) 
}

export default NewPost;