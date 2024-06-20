import React from 'react'
import Home from './Home'
import Footer from './Footer'

const HomeWithFooter  = ({posts}) => {
  return (
    <>
        < Home 
            posts={posts}
        />
        <Footer/>
    </>
  )
}

export default HomeWithFooter 