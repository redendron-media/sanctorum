import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <section className='bg-primary gap-4 lg:gap-8 px-10 py-[72px] flex flex-col lg:py-[120px] lg:px-40'>
 <h1 className="mobile3 text-white text-center">Contact us</h1>
      <div className="flex flex-col gap-7 items-center">
        <p className="text-white text-center text-balance lg:text-lg lg:line-clamp-2 lg:max-w-2xl">
        Got questions? Reach out, and let&apos;s get you connected with Gangtok&apos;s newest coworking hub.
        </p>
        <Button className="font-im_fell bg-surface hover:bg-surface/90 text-textdark w-full lg:w-fit">Get in touch</Button>
      </div>
    </section>
  )
}

export default Contact