import React from 'react'
import Menu from './Menu'

const menu = [
  'HOME',
  'REPORT WASTE',
  'COLLECT WASTE',
  'REWARDS',
  'LEADERBOARD',
  'HOTSPOT',
]

const Sidebar = () => {
  return (
    <div
      className='w-1/5 h-[calc(100vh-80px)] bg-gradient-to-t from-[#3DDC42] to-homeDarkGreen '
      style={{
        boxShadow:
          'inset 0 -10px 8px 8px rgba(255, 255, 255, 0.3), 5px 0 10px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className='w-full flex flex-col gap-8 items-end mt-8'>
        {menu.map((item, index) => (
          <Menu key={index} title={item} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
