import React from 'react'
import { SiAmazon , SiGoogle, SiOpenai, SiFlipkart } from 'react-icons/si'

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Google',
    icon: <SiGoogle size={24} />,
    description: 'Worked on UI of Google Search Console',
  },
  {
    id: 2,
    role: 'Backend Developer',
    company: 'Amazon',
    icon: <SiAmazon size={24} />,
    description: 'Designed scalable APIs and microservices.',
  },
  {
    id: 3,
    role: 'ML Engineer',
    company: 'OpenAI',
    icon: <SiOpenai size={24} />,
    description: 'Built intelligent AI models and tools.',
  },
  {
    id: 4,
    role: 'UI/UX Designer',
    company: 'Flipkart',
    icon: <SiFlipkart size={24} />,
    description: 'Designed Aesthetic UI and UX for Flipkart.',
  },
]

const Experience = () => {
  return (
    <section className="relative w-full py-24 bg-slate-950 text-white px-4 sm:px-6 lg:px-12">

      <div className="text-center mb-20">
        <p className="text-lg text-purple-300 mb-2 tracking-wide">What have I done so far</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
          Work Experience.
        </h1>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 z-0" />

        {/* Experience cards */}
        <div className="flex flex-col gap-28 relative z-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
              {/* Left Card */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-full sm:w-1/2 flex justify-end pr-0 sm:pr-8">
                    <Card exp={exp} alignment="right" />
                  </div>
                  <IconCircle icon={exp.icon} alt={exp.company} />
                  <div className="w-1/2 hidden sm:block" />
                </>
              ) : (
                <>
                  <div className="w-1/2 hidden sm:block" />
                  <IconCircle icon={exp.icon} alt={exp.company} />
                  <div className="w-full sm:w-1/2 flex justify-start pl-0 sm:pl-8">
                    <Card exp={exp} alignment="left" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Card = ({ exp, alignment }) => {
  return (
    <div className="p-[2px] rounded-xl shadow-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 w-full max-w-md">
      <div className="bg-slate-900 p-6 sm:p-8 rounded-xl">
        <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
        <p className={`font-semibold ${alignment === 'left' ? 'text-pink-400' : 'text-purple-400'}`}>
          {exp.company}
        </p>
        <p className="text-sm mt-2 text-slate-300">{exp.description}</p>
      </div>
    </div>
  )
}

const IconCircle = ({ icon }) => (
  <div className="relative flex flex-col items-center z-20">
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-300 to-orange-500 flex items-center justify-center border-8 border-slate-950 shadow-lg text-slate-950">
      {icon}
    </div>
  </div>
)


export default Experience
