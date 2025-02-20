'use client'

import React, { useState } from 'react'
import { MdHome, MdReport, MdLeaderboard } from 'react-icons/md'
import { FaRecycle, FaMedal } from 'react-icons/fa'
import { PiMapPinAreaFill } from 'react-icons/pi'

const icons = [
  { name: 'HOME', icon: <MdHome size={28} /> },
  { name: 'REPORT WASTE', icon: <MdReport size={28} /> },
  { name: 'COLLECT WASTE', icon: <FaRecycle size={28} /> },
  { name: 'REWARDS', icon: <FaMedal size={28} /> },
  { name: 'LEADERBOARD', icon: <MdLeaderboard size={28} /> },
  { name: 'HOTSPOT', icon: <PiMapPinAreaFill size={28} /> },
]

const Menu = ({ title }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div
      className={`w-[85%] p-2 flex gap-3 items-center justify-start bg-menuBg/50 rounded-l-xl text-white cursor-pointer hover:shadow-lg transition-shadow duration-200 ${
        active ? 'border-2 border-r-0 border-white' : 'border-none'
      }`}
      onClick={handleClick}
    >
      {icons.find((icon) => icon.name === title).icon}
      <p className='text-2xl font-bold text-white'>{title}</p>
    </div>
  )
}

export default Menu
