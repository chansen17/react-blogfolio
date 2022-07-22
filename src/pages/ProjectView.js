import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
  
  export default function ProjectView() {
    let location = useLocation();
    let project = location.state;
    console.log('project view', location.state);
  return (
    <div 
        // initial={{ width: 0}}
        // animate={{ width: "100%"}}
        // exit={{ x: window.innerWidth}}
        className="w-full min-h-screen my-12">
        <div className="mxw-sm w-full flex items-center flex-col justify-center space-y-6 text-left sm:text-center my-12">
            <p className={project?.category === 'web3' ? "animate animate__animated animate__fadeInDown animate__fast font-future uppercase" : "animate animate__animated animate__fadeInDown animate__fast font-bold uppercase"}>{project?.category}</p>
            <h2 className="animate animate__animated animate__fadeInDown animate__fast text-4xl md:text-6xl font-bold capitalize">{project?.name}</h2>
            <p className="animate animate__animated animate__fadeIn animate__slow text-xl font-light">{project?.excerpt}</p>
            <div className="flex items-center space-x-2">
                <a target="_blank" rel="noreferrer" href={project?.liveURL} className="first-letter:text-2xl text-sm md:text-md first-letter:font-bold p-1 border-2 border-transparent hover:border-b-rose-600 duration-200">Visit Project</a>
                <a target="_blank" rel="noreferrer" href={project?.repoURL} className="first-letter:text-2xl text-sm md:text-md first-letter:font-bold p-1 border-2 border-transparent hover:border-b-rose-600 duration-200">Github</a>
            </div>
        </div>
        {/* <div className="w-full my-12 max-w-[200px] mx-auto h-3 bg-gray-200" /> */}
        {/* cover image */}
        <section className="">
            <div>
                <img className="h-[70vh] w-full object-cover object-center" src={project?.cover} alt="cover image" />
            </div>
        </section>
        {/* content */}
        <section className="mxw-sm my-12">
            <div className="flex justify-start my-12">
                <h2 className="text-4xl md:text-6xl">Overview</h2>
            </div>
            <p className="text-2xl md:text-3xl font-light first-letter:text-4xl first-letter:md:text-6xl first-letter:font-semibold">{project?.overview}</p>
        </section>
        <div className="w-full my-12 max-w-[200px] mx-auto h-3 bg-gray-200" />
    </div>
  )
}
