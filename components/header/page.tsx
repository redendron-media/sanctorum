import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
   <nav className='fixed top-0 w-full bg-sec flex justify-center items-center py-4'>
        <Image src={'/logo.svg'} width={52} height={52} alt='logo'/>
   </nav>
  )
}

export default Header