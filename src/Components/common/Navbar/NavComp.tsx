import React from 'react'
import { NavbarTabs } from '@/Data/NavBar'

const NavComp = () => {
  return (
    <div className='flex p-0.5 bg-[#F0F0E7] w-full'>
      {
        NavbarTabs.map((name, index)=>(
          <button title={name.name} key={index} className='hover:bg-zinc-400 px-1 '>
            {name.name}
          </button>
        ))
      }
    </div>
  )
}

export default NavComp;
