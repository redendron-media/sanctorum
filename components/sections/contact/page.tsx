import ContactForm from '@/components/contact-form/page'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const Contact = () => {
  return (
    <section className='bg-primary gap-4 lg:gap-8 px-10 py-[72px] flex flex-col lg:py-[120px] lg:px-40'>
 <h1 className="mobile3 text-white text-center">Contact us</h1>
      <div className="flex flex-col gap-7 items-center">
        <p className="text-white text-center text-balance lg:text-lg lg:line-clamp-2 lg:max-w-2xl">
        Got questions? Reach out, and let&apos;s get you connected with Gangtok&apos;s newest coworking hub.
        </p>
        <Dialog>
        <DialogTrigger className=" w-full font-im_fell bg-surface lg:w-fit hover:bg-surface/90 text-textdark px-6 py-2 rounded-lg">
          <p className="font-im_fell text-base">Get in touch</p>
        </DialogTrigger>
        <DialogContent className="w-[80%] bg-surface">
          <DialogHeader>
            <DialogDescription />
            <DialogTitle className="text-center mobile3">
              Contact Us
            </DialogTitle>
            <ContactForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
    </section>
  )
}

export default Contact