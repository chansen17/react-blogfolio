import React from 'react'
import { Link } from 'react-router-dom';

export default function Hero({posts}) {

    let heroPost = posts[Math.floor(Math.random() * posts.length)];
    console.log('hero post', heroPost);

  return (
    <div className="w-full full">
        <div className="mxw-sm w-full my-12 relative">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">The Blog.</h2>
            {/* <span className="text-slate-300 absolute -top-10 left-0 -z-10 text-9xl font-bold">Folio</span> */}
        </div>
        <div className="mxw-sm grid gap-6 grid-cols-1 md:grid-cols-6">
            <div className="animate animate__animated animate__fadeIn md:col-span-4">
                <Link to={`post/view/${heroPost?.heroPost}`} state={heroPost}>
                    <img className="h-full w-full object-cover rounded-lg shadow-lg" src={heroPost?.cover}/>
                </Link>
            </div>
            <div className="animate animate__animated animate__fadeIn md:col-span-2 h-full flex flex-col justify-center space-y-3">
                <p>{heroPost?.date}</p>
                <Link to={`post/view/${heroPost?.heroPost}`} state={heroPost}>
                    <h2 className="text-2xl md:text-4xl capitalize">{heroPost?.title}</h2>
                </Link>
                <p className="text-xl font-light">{heroPost?.excerpt.slice(0,100)}..</p>
            </div>
        </div>
    </div>
  )
}
