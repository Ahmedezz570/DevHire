"use client"
import React ,{useState}from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Responsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const close =() =>{
    setIsOpen(false)
  }
  return (
    <div>
                    <Nav openNav ={toggleMenu}/>
                    <MobileNav showNav={isOpen} closeNav ={close}/>
    </div>
  )
}

export default Responsive