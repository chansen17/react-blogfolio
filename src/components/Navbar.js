import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links } from '../data/links';

export default function Navbar() {
    const location = useLocation();
    console.log(location.pathname)
  return (
    <div className="fixed bg-slate-100/70 top-0 left-0 right-0 w-full h-10 py-12 flex items-center backdrop-blur-lg z-50">
        <nav className="mxw-lg flex items-center justify-between">
            <div>
                <div className="h-10 w-10 md:h-14 md:w-14 bg-rose-600 rounded-full shadow-lg grid place-items-center text-lg text-white font-bold">B.</div>
            </div>
            <div className="space-x-1 md:space-x-4">   
            {links && links.map((link) => (
                <Link to={link?.route} className={location.pathname == link?.route ? "p-1 text-rose-600 border-2 border-transparent border-b-rose-600 text-sm md:text-md lg:text-lg" : "p-1 hover:text-rose-600 border-2 border-transparent hover:border-b-rose-600 duration-300 text-sm md:text-md lg:text-lg"}>{link?.name}</Link>
            ))}
            </div>
            {/* <div className="inline-flex md:hidden cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div> */}
        </nav>
    </div>
  )
}
