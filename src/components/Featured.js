import React from 'react'
import Post from './Post'

export default function Featured({posts}) {
    let featuredPosts = posts.filter(post => post.featured === true);


  return (
    <div className="w-full">
        <div className="mxw-sm w-full flex justify-start my-24">
            <h2 className="text-4xl md:text-6xl">Featured</h2>
        </div>
        <section className="mxw-sm grid gap-6 grid-cols-1 sm:grid-cols-2">
        {featuredPosts && featuredPosts.map((post) => (
            <Post post={post}/>
        ))}
        </section>
    </div>
  )
}
