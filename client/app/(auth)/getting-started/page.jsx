import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTrash, FaBroom, FaCity } from 'react-icons/fa'
import { IoSparklesSharp } from 'react-icons/io5'

const Landing = () => {
  return (
    <div className='relative w-full h-screen'>
      {/* texts */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 flex flex-col items-center z-10'>
        <h1 className='text-7xl text-white font-extrabold '>
          ACT SMART{' '}
          <span className='bg-gradient-to-b from-textLightGreen to-textDarkGreen text-transparent bg-clip-text'>
            LIVE GREEN
          </span>
        </h1>
        <h3 className='text-3xl font-bold text-landingText'>
          binbondhu's got your back
        </h3>
        {/* subtexts */}
        <div className='flex gap-16 mt-5'>
          <div className='flex flex-col items-center gap-1 text-xl font-medium text-landingText'>
            <FaTrash size={32} />
            <p>report wastes on streets</p>
          </div>
          <div className='flex flex-col items-center gap-1 text-xl font-medium text-landingText'>
            <FaBroom size={32} />
            <p>our cleaners will clean it</p>
          </div>
          <div className='flex flex-col items-center gap-1 text-xl font-medium text-landingText'>
            <FaCity size={32} />
            <p>live in a clean city</p>
          </div>
        </div>
        {/* button */}
        <Link
          href='/login'
          className='py-3 px-5 rounded-2xl flex items-center gap-2 mt-10 text-landingText bg-[radial-gradient(ellipse_at_center,_#43A046,_#1D6B21)] hover:scale-105 transition-all duration-300'
          style={{
            boxShadow:
              '0 0 180px #43A046, 0 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 -4px 2px rgba(0, 0, 0, 0.25), inset 0 2px 1px rgba(255, 255, 255, 0.25',
          }}
        >
          <h3 className='text-2xl font-bold'>GET STARTED</h3>
          <IoSparklesSharp size={32} />
        </Link>
        <Link href='/' className='text-landingText text-sm mt-2'>
          don't have an account?
        </Link>
      </div>
      {/* dhaka image */}
      <Image
        src='/dhaka.jpg'
        alt='Dhaka'
        width={3000}
        height={1755}
        className='w-full h-full object-cover'
      />
      {/* overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-lightGreen to-darkGreen opacity-50'></div>
    </div>
  )
}

export default Landing
