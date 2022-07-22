import React from 'react'
import Hero from '../components/Hero'
import Feed from '../components/Feed'
import Featured from '../components/Featured'
import AnimatedPage from '../components/AnimatedPage'

export default function Homepage({posts}) {
  return (
    <AnimatedPage>
        <Hero posts={posts}/>
        <Featured posts={posts} />
        <Feed posts={posts}/>
    </AnimatedPage>
  )
}
