import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='text-center min-h-screen text-white'>
      <h1>Projects</h1>
      <div className='flex flex-nowrap gap-10 m-auto'>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects