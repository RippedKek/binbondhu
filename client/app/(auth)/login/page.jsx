import React from 'react'
import { GiFallingLeaf } from 'react-icons/gi'

const LoginPage = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-lightGray to-darkGray relative flex items-center justify-center'>
      <div
        className='w-full h-screen bg-gradient-to-b from-lightGreen to-darkGreen absolute top-0 left-0'
        style={{
          clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)',
          boxShadow: '10px 0px 10px rgba(0, 0, 0, 0.5)',
        }}
      ></div>
      <div className='flex flex-col items-center justify-center w-[20%] text-white z-[9999]'>
        <div className='flex flex-col items-start w-full'>
          <h1 className='text-5xl font-bold mb-3'>Login</h1>
          <form className='flex flex-col w-full'>
            <p className='text-2xl'>email</p>
            <input
              type='email'
              placeholder='Email'
              className='p-2 py-1 outline-none rounded-lg bg-gradient-to-b from-formGreen to-white text-black focus:outline focus:outline-darkGreen'
            />
            <p className='text-2xl mt-2'>password</p>
            <input
              type='password'
              placeholder='Password'
              className='p-2 py-1 outline-none rounded-lg bg-gradient-to-b from-formGreen to-white text-black focus:outline focus:outline-darkGreen'
            />
          </form>
        </div>
        <GiFallingLeaf className='text-leafColor text-6xl mt-8 cursor-pointer rotate-180 hover:rotate-[190deg] transition-all duration-200' />
      </div>
    </div>
  )
}

export default LoginPage
