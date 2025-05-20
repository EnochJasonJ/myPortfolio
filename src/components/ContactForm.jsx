import React from 'react'

function ContactForm() {
  return (
    <div className='bg-[#0a0f1c] ml-15 mr-15 flex flex-col md:flex-row gap-10 p-10 rounded-xl'>
      <form autoComplete='off' className='flex flex-col w-full md:w-1/2 p-5 items-center justify-center gap-5 mr-15 bg-[#10182a] rounded-xl'>
        <div className='flex flex-col items-start w-full mb-5'>
          <p className='font-medium text-slate-500'>GET IN TOUCH</p>
          <h1 className='font-extrabold text-5xl md:text-7xl text-white'>Contact.</h1>
        </div>
        <div className='flex flex-col items-start w-full gap-2'>
          <label htmlFor="name" className='font-medium text-lg'>Name</label>
          <input placeholder="What's your good name ?" type="text" id='name' className='bg-[#0f1629] px-5 rounded-xl py-3 w-full' />
        </div>
        <div className='flex flex-col items-start w-full gap-2'>
          <label htmlFor="mail" className='font-medium text-lg'>Email</label>
          <input placeholder="What's your Mail ?" type="email" id='mail' className='bg-[#0f1629] px-5 rounded-xl py-3 w-full' />
        </div>
        <div className='flex flex-col items-start w-full gap-2'>
          <label htmlFor="message" className='font-medium text-lg'>Message</label>
          <textarea placeholder="What you want to say ?" id='message' className='bg-[#0f1629] px-5 rounded-xl py-3 w-full min-h-[100px]' />
        </div>
        <button type="submit" className='bg-[#1e0e2e] px-5 py-3 w-full rounded-xl mt-6'>Send</button>
      </form>
      <div className='w-full md:w-1/2 mr-15 flex items-center justify-center'>
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className='rounded-xl w-full h-[350px]'
        ></iframe>
      </div>
    </div>
  )
}

export default ContactForm