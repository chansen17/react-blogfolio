import React from 'react'
import Post from './Post';

export default function Feed({posts}) {

    // const feedPosts = posts.slice(0,4);

  return (
    <div className="w-full my-12">
        <div className="mxw-sm w-full flex justify-start my-12">
            <h2 className="text-4xl">Posts</h2>
        </div>
        <section className="mxw-sm grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts && posts.map((post) => (
            <Post key={post?.id} post={post}/>
        ))}
        </section>
    </div>
  )
}
