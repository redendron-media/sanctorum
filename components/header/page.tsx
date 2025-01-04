import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
   <nav className='relative top-0 w-full bg-sec flex justify-center items-center py-4 px-7'>
    <Link href={'./'}>
    <Image src={'/logo.svg'} width={52} height={52} alt='logo' className='lg:size-20'/>
    </Link>
        {/* <Icon icon="ci:hamburger-md" className="text-primary text-4xl" /> */}
   </nav>
  )
}

export default Header