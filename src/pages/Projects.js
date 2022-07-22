import React from 'react'
import AnimatedPage from '../components/AnimatedPage';
import Project from '../components/Project';
import { projects } from '../data/projects'

export default function Projects() {
    let allProjects = projects;
    let featuredProjects = allProjects.filter(project => project.featured === true);

  return (
    <AnimatedPage>
        <div className="w-full min-h-screen">
            <div className="mxw-sm w-full my-12 relative">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">The Projects.</h2>
            </div>
            <section className="mxw-sm grid gap-6 grid-cols-1 sm:grid-cols-2 pb-12">
            {featuredProjects && featuredProjects.slice(0,2).map((project) => (
                <Project key={project?.id} project={project} />
            ))}
            </section>
            <section className="mxw-sm grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-12">
            {allProjects && allProjects.map((project) => (
                <Project key={project?.id} project={project}/>
            ))}
            </section>
        </div>
    </AnimatedPage>
  )
}
