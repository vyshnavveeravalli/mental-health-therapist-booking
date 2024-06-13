import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Profile from '@/public/assets/images/profile.jpg'
import Logo from '@/public/assets/images/SOOTHE.png'

const Navbar = () => {
  return (
    <nav className='flex flex-row fixed w-full h-24 shadow-md bg-white z-50'>
    <div className='flex bg-white justify-start items-center h-30 w-screen px-8 2xl:px-16'>
        <Link href="./">
        <Image src={Logo} alt='profile' width="150" height="50" />
        </Link>
        
    </div>
    <div className='flex bg-white justify-end items-end h-20 w-28 px-4 '>
    <Link href="./">
          
          <Image src={Profile} alt='profile' width="100" height="100" />
        
      </Link>
    </div>
    </nav>
  )
}

export default Navbar