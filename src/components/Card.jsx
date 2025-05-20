import React from 'react'
import Tilt from 'react-parallax-tilt'


const Card = ({ role , icon }) => {
  return (
    <Tilt tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      transitionSpeed={5000}
      glareEnable={true}
      glareColor='white'
      gyroscope={true} className='mx-auto mt-10'>
      <div className="h-[300px] w-[275px] rounded-xl p-[5px] bg-gradient-to-br from-purple-500 via-teal-500 to-pink-500">
        <div className="h-full w-full rounded-xl bg-slate-900 gap-10 flex flex-col items-center justify-center">
          <div> {icon} </div>
          <h1 className='text-center font-bold text-[24px]'> {role} </h1>
        </div>
      </div>
    </Tilt>
  )
}

export default Card