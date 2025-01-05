import React from 'react'
import NavComp from './NavComp'
import Interactions from './Interactions'
import AddressTab from './AddressTab'
import { ChildComponentProps } from '@/Types/Interfaces'
import { useStateManagement } from '@/hooks/StateContext'

const NavBar: React.FC<ChildComponentProps> = ({ index, icon, Title, width}) => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  // console.log(Title)
  return (
    <div className='w-full flex flex-col gap-[1px] bg-white'>
      <NavComp />
      <Interactions index={index} Max={Max} Min={Min} Open={Open} makeFalse={makeFalse} makeTrue={makeTrue} width={width}/>
      <AddressTab index={index} Title={Title} Max={Max} Min={Min} Open={Open} makeFalse={makeFalse} makeTrue={makeTrue} icon={icon} width={width}/>
    </div>
  )
}

export default NavBar
