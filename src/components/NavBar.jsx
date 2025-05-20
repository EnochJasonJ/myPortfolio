import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-slate-950 fixed top-0 left-0 right-0 shadow-sm z-20'>
      <div>
        <ul className='flex flex-row items-center justify-between px-10 py-3 text-white'>
          <li>
            Enoch
          </li>
          <li className='flex gap-10'>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar