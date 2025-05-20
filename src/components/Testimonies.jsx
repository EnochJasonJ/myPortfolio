import React from 'react'
import TestimonyCard from './TestimonyCard'

function Testimonies() {
  return (
    <div className='min-h-screen text-white'>
      <div className='mt-15 rounded bg-[#160126] mx-15 h-auto p-5'>
        <div className='m-15'>
          <p className='text-[#cea0f25a] text-2xl'>WHAT OTHERS SAY</p>
          <h1 className='font-bold text-7xl mb-10'>Testimonials.</h1>
        </div>
        <div className='flex'>
          <TestimonyCard />
        </div>
      </div>
    </div>
  )
}

export default Testimonies