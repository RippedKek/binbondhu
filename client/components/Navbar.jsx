import React from 'react'
import { FaUser, FaLeaf } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div
      className='w-full py-4 px-4 md:px-8 lg:px-16 xl:px-32 flex items-center justify-between bg-[radial-gradient(ellipse_at_center,_#60C464,_#0B9D10)]'
      style={{
        boxShadow:
          '0 0 180px #43A046, 0 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 -4px 2px rgba(0, 0, 0, 0.25), inset 0 2px 1px rgba(255, 255, 255, 0.25',
      }}
    >
      <h1 className='text-3xl font-bold text-white'>Binbondhu</h1>
      <div
        className='w-[13%] p-2 px-4 bg-white rounded-xl flex items-center justify-between text-homeDarkGreen'
        style={{
          boxShadow:
            '0 0 180px #43A046, 0 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 -4px 2px rgba(0, 0, 0, 0.25), inset 0 2px 1px rgba(255, 255, 255, 0.25',
        }}
      >
        <FaUser size={25} />
        <div className='border-l-2 h-8 bg-slate-400'></div>
        <div className='flex items-center gap-1'>
          <FaLeaf size={25} />
          <p className='text-lg font-bold'>19.14</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
