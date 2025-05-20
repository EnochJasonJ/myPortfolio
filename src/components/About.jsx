import React from 'react'
import { SiFlutter , SiJavascript, SiDjango, SiFigma } from 'react-icons/si'
import Card from './Card'

const About = () => {
  return (
    <div className='min-h-screen text-white'>
      <div className='ml-15'>
        <p className='text-slate-400 text-2xl'>INTRODUCTION</p>
        <h1 className='text-white font-bold text-8xl my-5'>Overview.</h1>
        <p className='text-slate-400 text-[17px]'>I'm a skilled software developer with experience in TypeScript and JavaScript, and <br /> expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and<br /> collaborate closely with clients to create efficient, scalable, and user-friendly solutions<br /> that solve real-world problems. Let's work together to bring your ideas to life!</p>
      </div> 
      <div className='flex flex-wrap justify-center gap-5 mt-15 mx-10 mb-20'>
        <Card role={"Web Developer"} icon={<SiJavascript color='#F0DB4F' size={50} />} />
        <Card role={"Flutter Developer"} icon={<SiFlutter color='#42A5F5' size={50} />} />
        <Card role={"Backend Developer"} icon={<SiDjango color='#092E20' size={50} />} />
        <Card role={"UI/UX Designer"} icon={<SiFigma color='#A259FF' size={50} />} />
      </div>
    </div>
  )
}

export default About