import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
   <main className=''>
    <section className='bg-surface px-5 py-3  flex flex-col items-center lg:flex-row gap-5 lg:gap-10'>
    <div className=' lg:w-1/2 w-full flex flex-col gap-1.5 lg:gap-6'>
    <h1 className='text-[56px] leading-[48px]'>Sanctorum is more than just a coworking space.</h1>
    <p >It&apos;s more than desks, chairs, and meeting rooms—it&apos;s a hub of stories, interactions, and possibilities. For us, every conversation and collaboration within these walls is as significant as the work being done. Just as atoms don't merely build matter but are the essence of it, the interactions here are the fabric of our community.</p>
</div>
<Image src={'/about/about1.png'} width={527} height={524} alt='About'/>
    </section>
<section className='bg-white px-5 pt-20 pb-10 flex flex-col gap-12'>
    <div className='flex flex-col gap-6 lg:px-[150px] items-center '>
    <h1 className='text-[56px] leading-[48px]'>We believe that environment is a silent architect of behavior.</h1>
    <p > 
    Regardless of individual differences, certain patterns of innovation and collaboration emerge when people are placed in the right setting. Sanctorum is designed to be that setting—a space where ideas flourish and connections are forged.
    </p>
    </div>
    <div className='flex flex-col lg:flex-row gap-4 items-center w-full justify-center'>
    <Image src={'/about/about2.png'} width={339} height={456} alt='About'/>
    <Image src={'/about/about3.png'} width={339} height={456} alt='About'/>
    <Image src={'/about/about4.png'} width={339} height={456} alt='About'/>
    </div>
</section>

<section className='bg-primary px-10 flex flex-col items-center lg:flex-row gap-5 lg:gap-10'>
    <div className=' lg:w-1/2 w-full flex flex-col gap-1.5 lg:gap-6'>
    <h1 className='text-[56px] leading-[48px]'>Our inspiration comes from history.</h1>
    <p >Just as the Medici family&apos;s patronage of artists in 15th-century Florence catalyzed the Renaissance, and the coffeehouses of England became incubators for the Age of Enlightenment, we envision Sanctorum as a crucible for a new wave of creativity and entrepreneurship in Sikkim.</p>
</div>
<div className='flex flex-col gap-7'>
<Image src={'/about/about5.png'} width={482} height={343} alt='About'/>
<Image src={'/about/about6.png'} width={482} height={343} alt='About'/>
</div>
    </section>

    <section className='bg-sec px-10 flex flex-col items-center lg:flex-row gap-5 lg:gap-10'>
    <div className=' lg:w-1/2 w-full flex flex-col gap-1.5 lg:gap-6'>
    <h1 className='text-[56px] leading-[48px]'>My Story</h1>
    <p >In 2015, I, Thupden Gurung, embarked on a bold project to unite artists, creators, and entrepreneurs from Northeast India through a blog. Although the blog eventually came to an end, the experience was transformative. It made me aware of the immense talent in the region and taught me the value of creating platforms for sharing and collaboration. This journey laid the early foundations for Sanctorum. <br/>
    Later on, as a freelance designer, I quickly realized the challenges of finding the right workspace. We once rented an office, but the overwhelming costs and paperwork made us rethink the idea. Meeting clients in cafes and working remotely felt convenient, yet something was missing. I noticed that many freelancers shared the same struggles—seeking a space that meets their unique needs without the burden of traditional office expenses.</p>
</div>
<div className='flex flex-col gap-7'>
<Image src={'/about/about7.png'} width={482} height={343} alt='About'/>
<Image src={'/about/about8.png'} width={482} height={343} alt='About'/>
</div>
    </section>

    <section className='bg-surface px-10 py-3  flex flex-col items-center lg:flex-row gap-5 lg:gap-10'>
    <div className=' lg:w-1/2 w-full flex flex-col gap-1.5 lg:gap-6'>
    <h1 className='text-[56px] leading-[48px]'>Rethinking the old quaint office</h1>
    <p >The pandemic revealed that working from home could offer an unexpected boost in productivity and an improved quality of life. However, as businesses transition back to the office, the real challenge lies in encouraging staff to return. Long commutes, unproductive meetings, and constant distractions are hardly enticing. <br/>

Yet, not everyone has the comfort of a family, a partner, or a cozy apartment. For many young professionals, the absence of social interaction is keenly felt. They miss the camaraderie, the chance to build meaningful connections, and the invaluable learning that comes from engaging with peers.<br/>

In my early days as a freelancer, I discovered the profound impact of proximity. Sitting next to a coworker, I learned Adobe Illustrator in three days—gaining more insight than I had in months of formal education.<br/>

At Sanctorum, we are redefining the workplace experience. Our space is designed for freelancers, entrepreneurs, and creatives to flourish without the limitations of conventional offices. Sanctorum isn&apos;t just about shared desks; it&apos;s about shared aspirations, mutual growth, and fostering a vibrant community. Welcome to a new era of work, right here in Gangtok.</p>
</div>
<Image src={'/about/about9.png'} width={527} height={524} alt='About'/>
    </section>

   </main>
  )
}

export default About