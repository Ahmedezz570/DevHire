import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type props = {
  showNav?: boolean;
  closeNav?: () => void;
}
const MobileNav = ({showNav , closeNav}:props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';
  return (
    <div>
      <div className={`fixed ${navOpen} inset-0 transform transition-all right-0 duration-500 z-[10002] bg-black w-full opacity-70 h-screen`}>
<div className={`text-white ${navOpen}fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[1000050] right-0`}>
  {NavLinks.map((link) => (
    <Link key={link.id} href={link.url} className='text-2xl font-semibold hover:text-cyan-300 transition-all duration-200 text-center'>
      {link.label}
    </Link>
  ))}

  <CgClose className='w-8 h-8 text-white absolute top-5 right-5 cursor-pointer hover:text-cyan-300 transition-all duration-200' onClick={closeNav}/>
</div>


      </div>
    </div>
  )
}

export default MobileNav