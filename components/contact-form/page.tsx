'use client';
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Icon } from "@iconify/react";
import { Button } from '../ui/button';
interface WaitlistFormProps {
    orientation?: 'vertical' | 'horizontal'
  }

  
const ContactForm : React.FC<WaitlistFormProps> = ({ 
    orientation = 'vertical' 
  }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [status, setStatus] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };


      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Sending...');
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setStatus('Message sent successfully!');
            setIsSubmitted(true);
            
            setFormData({ name: '', email: '', phone: '' });
          } else {
            setStatus('Failed to send message. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          setStatus('An error occurred. Please try again.');
        }
      }; 
    return (
      <div>
        {isSubmitted ? (
          <section className=' z-20 items-center flex-col gap-2 flex'>
          <h6 className='mobile6'>Thank you for getting in touch with us!</h6>
          <p>We&apos;ve received your enquiry and our team will get back to you shortly to assist you with your needs.</p>
        </section>
        ):(
          <form onSubmit={handleSubmit} className={cn('flex z-20 flex-col gap-2 items-center',orientation == 'vertical' ? 'flex-col gap-2 flex' : 'lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-6 hidden')}>
     
              <div className={cn("space-y-2 flex flex-col lg:col-span-1 pb-2 w-full")}>
              {
                orientation === 'vertical' && (
                  <Label htmlFor="name" aria-required className='text-textdark-200 w-full text-start '>Name</Label>
                )
              }
              <div className="relative">
                <Input required id="name" onChange={handleChange} className="peer ps-9 bg-surface border-textdark-300 py-1" placeholder="Enter your name here" type="text" />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Icon icon="material-symbols:person" className="text-textdark-200 text-xl" />
                </div>
              </div>
            </div>
        
            <div className={cn("space-y-2 flex flex-col lg:col-span-1 pb-2 w-full")}>
              {
                orientation === 'vertical' && (
                  <Label htmlFor="email" aria-required className='text-start text-textdark-200'>Email</Label>
        
                )
              }
              <div className="relative">
                <Input required id="email"  onChange={handleChange} className="peer py-1 ps-9 bg-surface border-textdark-300" placeholder="Enter your email" type="email" />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Icon icon="majesticons:mail-line" className="text-textdark-200 text-xl" />
                </div>
              </div>
            </div>
        
            <div className={cn("space-y-2 flex flex-col text lg:col-span-1 pb-2 w-full")}>
              {
                orientation === 'vertical' && (
                  <Label htmlFor="phone" aria-required  className='text-textdark-200 text-start'>Phone</Label>
                )
              }
              <div className="relative">
                <Input required id="phone" onChange={handleChange} className="peer py-1 ps-9 bg-surface border-textdark-300" placeholder="Enter your phone no." type="number" />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Icon icon="si:phone-fill" className="text-textdark-200 text-xl" />
                </div>
              </div>
            </div>
           
            <Button type='submit' disabled={isSubmitting} className={cn('py-3 w-fit',orientation == 'vertical'? '':'bg-[#561C11] hover:bg-[#561C11]/90')}>
            {isSubmitting ? 'Submitting...' :'Get in touch'}
            
            </Button>
            </form>
        )}
      </div>
    

    
  )
}

export default ContactForm