import React from 'react'
import { ChildComponentProps } from '@/Types/Interfaces'
import Image from 'next/image'

const AddressTab: React.FC<ChildComponentProps> = ({ Title, icon }) => {
  // console.log(Address)
  return (
    <div className='flex justify-center border-t-[1px] content-center text-center min-w-full border-b-[1px] border-[#E2DECD] bg-[#F0F0E7]'>
      <div className='self-start gap-1 border-r-[2px] pr-2 border-r-white'>
        <span>Address</span>
      </div>
      <div className='flex gap-2 w-full h-full pr-2 pl-2 p-0 border border-r-white'>
        <Image src={icon!} alt={Title?.toString()!} width={20}/>
        <input type="text" className='w-full h-full border border-black rounded px-0.5' placeholder={Title} value={Title}/>
      </div>
      <div className='flex gap-2 px-2'>
        <span>GO</span>
        <span>Links</span>
      </div>
    </div>
  )
}

export default AddressTab
