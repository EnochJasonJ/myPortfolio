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
    // In App.jsx
<div className='bg-slate-950'>
  <NavBar />
  <div id="hero"><Hero /></div>
  <div id="about"><About /></div>
  <div id="experience"><Experience /></div>
  <div id="tech"><TechStacks /></div>
  <div id="projects"><Projects /></div>
  <div id="testimonies"><Testimonies /></div>
  <div id="contact"><Contact /></div>
</div>

  )
}

export default App