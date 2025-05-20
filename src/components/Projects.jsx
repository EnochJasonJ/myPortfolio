import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='text-center min-h-screen text-white'>
      <div className='flex flex-col gap-5 text-left ml-15'>
        <p className='text-2xl text-slate-500'>MY WORK</p>
        <h1 className='font-bold text-8xl'>Projects.</h1>
        <p className='text-slate-500 text-xl'>Following projects showcases my skills and experience through real-world examples of <br /> my work. Each project is briefly described with links to code repositories and live demos in <br /> it. It reflects my ability to solve complex problems, work with different technologies, and <br /> manage projects effectively.
        </p>
      </div>
      <div className='flex  gap-10 m-auto'>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects