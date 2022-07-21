import React from 'react'
import Project from '../components/Project';
import { projects } from '../data/projects'

export default function Projects() {
    let allProjects = projects;

  return (
    <div className="w-full min-h-screen">
        <div className="mxw-sm w-full my-12 relative">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">The Projects.</h2>
        </div>
        <section className="mxw-sm grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pb-12">
        {allProjects && allProjects.map((project) => (
            <Project key={project?.id} project={project}/>
        ))}
        </section>
    </div>
  )
}
