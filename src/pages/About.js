import React from 'react'
import { about } from '../data/about'

export default function About() {
    let info = about;

  return (
    <div className="w-full min-h-screen">
        <div className="mxw-sm w-full my-12 relative">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">The Bio.</h2>
        </div>
        <section className="animate animate__animated animate__fadeIn mxw-sm">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-5">
                <div className="sm:col-span-1">
                    <img className="h-full w-full 4 object-cover rounded-lg shrink-0" src={info?.avatar} />
                </div>
                <div className="sm:col-span-4 flex flex-col items-start justify-center space-y-3">
                    <h2 className="text-4xl">{info?.bioIntro}</h2>
                    <p className="text-2xl font-thin">{info?.bioPreface}</p>
                    <div className="flex items-center space-x-4 flex-wrap justify-start">
                        {info?.socials && info?.socials.map((social) => (
                            <a key={social?.id} target="_blank" rel="noreferrer" href={social?.url} className="inline-block my-1 bg-rose-500 text-white font-semibold py-2 px-3">{social?.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </section>  
        <div className="w-full my-12 max-w-[200px] mx-auto h-3 bg-gray-200" />
        <section className="mxw-sm my-12">
            <p className="text-2xl md:text-3xl font-light">{info?.bioSub}</p>
            <div className="w-full my-12 max-w-[200px] mx-auto h-3 bg-gray-200" />
            <p className="text-2xl md:text-3xl py-6">{info?.bioMain}</p>
        </section>
    </div>
  )
}
