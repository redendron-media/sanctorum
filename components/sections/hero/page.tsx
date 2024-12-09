import WaitlistForm from '@/components/waitlist-form/page'
import React from 'react'

const Hero = () => {
  return (
   <section className='flex relative flex-col h-full items-center w-full gap-4 lg:gap-8 bg-primary/50 overflow-hidden'>
    <div className='lg:px-10 px-10 py-[72px] lg:py-[180px] z-10 flex flex-col gap-4 lg:gap-8 items-center'>
    <h1 className='mobile3 text-white font-im_fell text-balance text-center z-10'>It&apos;s more than just a desk</h1>
    <p className='text-white text-center text-pretty lg:text-lg lg:line-clamp-2 lg:max-w-2xl z-10'>Sanctorum is a coworking space in Gangtok designed for entrepreneurs, freelancers, and professionals who value a productive and collaborative environment.</p>
    <WaitlistForm orientation='horizontal'/>
    </div>
        {/* <div className="absolute inset-0 w-screen h-full z-0">    
        <div className="absolute inset-0 bg-black/40 z-10" />  
        <video  className="w-screen h-full scale-[200%]"
        autoPlay
        loop
        muted
        playsInline>
               <source src="/Sanctorum.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    
        </video>
        </div> */}
       
   </section>
  )
}

export default Hero

