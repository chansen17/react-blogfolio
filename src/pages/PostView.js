import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
  
  export default function PostView() {
    let location = useLocation();
    let post = location.state;
    console.log('post view', location.state);
  return (
    <div 
        // initial={{ opacity: 0}}
        // animate={{ opacity: 1}}
        // exit={{ opacity: 0}}
        className="w-full min-h-screen my-12">
        <div className="mxw-sm w-full flex items-center flex-col justify-center space-y-6 text-center my-12">
            <p className="animate animate__animated animate__fadeInDown animate__fast font-semibold capitalize">{post?.topic}</p>
            <h2 className="animate animate__animated animate__fadeInDown animate__fast  text-4xl md:text-6xl font-bold capitalize">{post?.title}</h2>
            <p className="animate animate__animated animate__fadeIn animate__slow text-xl font-light">{post?.excerpt}</p>
            <div className="animate animate__animated animate__fadeIn animate__slow flex items-center space-x-3">
                <img className="h-16 w-16 rounded-full object-cover shadow-lg" src="https://avatars.githubusercontent.com/u/44001658?v=4" />
                <div className="text-left">
                    <p>{post?.author}</p>
                    <p className="italic">{post?.date}</p>
                </div>
            </div>
        </div>
        {/* <div className="w-full my-12 max-w-[200px] mx-auto h-3 bg-gray-200" /> */}
        {/* cover image */}
        <section className="">
            <div>
                <img className="h-[70vh] w-full object-cover object-center" src={post?.cover} alt="cover image" />
            </div>
        </section>
        {/* content */}
        <section className="mxw-sm my-12">
            <div className="flex justify-start my-12">
                <h2 className="text-4xl md:text-6xl">Project Overview</h2>
            </div>
            <p className="text-2xl md:text-3xl font-light first-letter:text-4xl first-letter:md:text-6xl first-letter:font-semibold">{post?.body}</p>
        </section>
        <div className="w-full my-12 max-w-[200px] mx-auto h-3 bg-gray-200" />
    </div>
  )
}
