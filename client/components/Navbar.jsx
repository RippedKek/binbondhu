'use client'

import React, { useState } from 'react'
import { FaUser, FaLeaf } from 'react-icons/fa'

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false)
  const [balanceOpen, setBalanceOpen] = useState(false)

  return (
    <div
      className='w-full h-[80px] z-20 py-4 px-4 md:px-8 lg:px-16 xl:px-32 flex items-center justify-between bg-[radial-gradient(ellipse_at_center,_#60C464,_#0B9D10)]'
      style={{
        boxShadow:
          '0 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 -4px 2px rgba(0, 0, 0, 0.25), inset 0 2px 1px rgba(255, 255, 255, 0.25',
      }}
    >
      <h1 className='text-3xl font-bold text-white'>Binbondhu</h1>
      <div
        className='relative w-[13%] p-2 px-4 bg-white rounded-xl flex items-center justify-between text-homeDarkGreen'
        style={{
          boxShadow:
            '0 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 -4px 2px rgba(0, 0, 0, 0.25), inset 0 2px 1px rgba(255, 255, 255, 0.25',
        }}
      >
        <FaUser
          size={25}
          onClick={() => {
            setBalanceOpen(false)
            setProfileOpen(true)
          }}
          className='cursor-pointer'
        />
        {profileOpen && (
          <div className='absolute w-full flex flex-col gap-3 top-12 left-0 bg-white p-3 z-50 rounded-xl border border-slate-200'>
            {/* heading */}
            <div className='flex items-center justify-between'>
              <h1>Profile</h1>
              <h1
                className='cursor-pointer'
                onClick={() => {
                  setProfileOpen(false)
                }}
              >
                x
              </h1>
            </div>
            {/* profile details */}
            <div className='flex flex-col'>
              <h1>Tanjeeb Meheran</h1>
              <h3 className='text-xs text-wrap text-slate-500'>
                tanjeeb1909@gmail.com
              </h3>
              <h3 className='underline mt-2 cursor-pointer'>Edit Profile</h3>
            </div>
          </div>
        )}
        {balanceOpen && (
          <div className='absolute w-full flex flex-col gap-3 top-12 left-0 bg-white p-3 z-50 rounded-xl border border-slate-200'>
            {/* heading */}
            <div className='flex items-center justify-between'>
              <h1>Points</h1>
              <h1
                className='cursor-pointer'
                onClick={() => setBalanceOpen(false)}
              >
                x
              </h1>
            </div>
            {/* balance details */}
            <div className='flex flex-col'>
              <h1>Tanjeeb Meheran</h1>
              <h3 className='underline mt-2 cursor-pointer'>Redeem Points</h3>
            </div>
          </div>
        )}
        <div className='border-l-2 h-8 bg-slate-400'></div>
        <div className='relative flex items-center gap-1'>
          <FaLeaf
            size={25}
            className='cursor-pointer'
            onClick={() => {
              setProfileOpen(false)
              setBalanceOpen(true)
            }}
          />
          <p className='text-lg font-bold'>19.14</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
