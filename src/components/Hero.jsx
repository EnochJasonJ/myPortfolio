import React  from 'react'

const Hero = () => {

  return (
    <section className=' text-white flex items-center text-center min-h-screen'>
      <div className='flex flex-row items-center justify-between w-full max-2-7xl mx-auto'>
        <div className="intro flex flex-row items-start text-left ml-15 top-[200px]">
          <div className='flex flex-col items-center mr-5'>
            <div className='bg-purple-900 h-10 w-10 rounded-full' />
            <div className='bg-gradient-to-b from-purple-900 to-transparent h-[400px] w-2 -mt-5' />
          </div>
          <div>
            <h1 className='text-white font-bold text-7xl '>Hi, I'm <span className='text-purple-500'>Enoch </span></h1>
            <p className='font-medium mt-5 text-2xl sm:block hidden'>I Develop 3D Visuals, user<br></br> interfaces and web Applications</p>
          </div>
        </div>
        <div className='w-1/2 mr-10'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png" alt="" className='object-contain w-full h-[350px]  ' />
        </div>
      </div>
    </section>
  )
}

export default Hero