import React from 'react'
import { SiDjango, SiVuedotjs, SiReact, SiTailwindcss, SiPostgresql, SiSupabase, SiDocker, SiXcode } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const stacks = [
  {
    id: 1,
    name: "Django",
    icon: <SiDjango size={50} color='#092E20' />
  },
  {
    id: 2,
    name: "Vue.js",
    icon: <SiVuedotjs size={50} color='#42b883' />
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={50} color='#61dafb' />
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={50} color='#38bdf8' />
  },
  {
    id: 5,
    name: "PostgreSQL",
    icon: <SiPostgresql size={50} color='#336791' />
  },
  {
    id: 6,
    name: "Supabase",
    icon: <SiSupabase size={50} color='#3ecf8e' />
  },
  {
    id: 7,
    name: "Docker",
    icon: <SiDocker size={50} color='#2496ed' />
  },
  {
    id: 8,
    name: "Xcode",
    icon: <SiXcode size={50} color='#1575F9' />
  }
]

function TechStacks() {
  return (
    <section className='h-[500px]'>
      <div className='flex flex-wrap justify-center gap-10 mx-auto'>
        {stacks.map((stack)=>(
          <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45} transitionSpeed={4000} glareEnable={true} key={stack.name} gyroscope={true} glareColor='white' className={`flex flex-col items-center justify-center bg-slate-900 shadow-sm  hover:rounded-xl transition-all duration-700 hover:shadow-slate-700  border-3 w-[140px] h-[140px] p-5 rounded-xl ${(stack.id) % 2 == 0 ? 'hover:border-purple-500' : 'hover:border-pink-500' }`}>
            <div> {stack.icon} </div>
            <h2 className='text-white'> {stack.name} </h2>
          </Tilt>
        ))}
      </div>
    </section>
  )
}

export default TechStacks