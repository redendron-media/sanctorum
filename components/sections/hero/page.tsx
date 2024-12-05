import WaitlistForm from '@/components/waitlist-form/page'
import React from 'react'

const Hero = () => {
  return (
   <section className='flex flex-col items-center px-10 py-[72px] lg:py-[180px] lg:px-40 gap-4 lg:gap-8 bg-primary/50'>
        <h1 className='mobile3 text-white font-im_fell text-balance text-center'>It’s more than just a desk</h1>
        <p className='text-white text-center text-pretty lg:text-lg lg:line-clamp-2 lg:max-w-2xl'>Sanctorum is a coworking space in Gangtok designed for entrepreneurs, freelancers, and professionals who value a productive and collaborative environment.</p>
        <WaitlistForm orientation='horizontal'/>
   </section>
  )
}

export default Hero

