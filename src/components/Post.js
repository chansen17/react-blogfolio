import { Link } from 'react-router-dom';
import React from 'react'

export default function Post({post}) {
    console.log('post item:', post);
  return (
    <Link to={`/post/view/${post?.id}`} state={post}>
    <article className="w-full min-h-64 cursor-pointer">
        <figure className="">
            <div id="imageWrapper" className="h-full w-full">
                <img className="w-full h-52 object-cover rounded-lg shadow-xl" src={post?.cover} alt="cover image"/>
            </div>
            <figcaption className="py-4">
                <div className="flex items-center justify-between">
                    <p>{post?.date}</p>
                    {post?.featured && (
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                    )}
                </div>
                <h2 className="text-xl font-bold capitalize">{post?.title}</h2>
                <p className="truncate">{post?.excerpt}</p>
            </figcaption>
        </figure>
    </article>
    </Link>
  )
}
