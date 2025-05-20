import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import TechStacks from './components/TechStacks'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Experience from './components/Experience'
import Testimonies from './components/Testimonies'
const App = () => {
  return (
    <div className='bg-slate-950'>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <TechStacks />
      <Projects />
      <Testimonies />
      <Contact />
    </div>
  )
}

export default App