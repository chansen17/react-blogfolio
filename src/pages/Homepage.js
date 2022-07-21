import React from 'react'
import Hero from '../components/Hero'
import Feed from '../components/Feed'
import Featured from '../components/Featured'

export default function Homepage({posts}) {
  return (
    <div>
        <Hero posts={posts}/>
        <Featured posts={posts} />
        <Feed posts={posts}/>
    </div>
  )
}
