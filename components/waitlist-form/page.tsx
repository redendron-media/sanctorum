import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface WaitlistFormProps {
  orientation?: 'vertical' | 'horizontal'
}


const WaitlistForm: React.FC<WaitlistFormProps> = ({ 
  orientation = 'vertical' 
}) => {
  return (
    <form action="" className={cn('flex z-20 flex-col gap-2 items-center',orientation == 'vertical' ? 'flex-col gap-2 flex' : 'lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-6 hidden')}>
     
      <div className={cn("space-y-2 lg:col-span-1 pb-2")}>
      {
        orientation === 'vertical' && (
          <Label htmlFor="input-01" aria-required className='text-textdark-200'>Name</Label>
        )
      }
      <div className="relative">
        <Input required id="input-01" className="peer ps-9 bg-surface border-textdark-300 py-1" placeholder="Enter your name here" type="text" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Icon icon="material-symbols:person" className="text-textdark-200 text-xl" />
        </div>
      </div>
    </div>

    <div className={cn("space-y-2 lg:col-span-1 pb-2")}>
      {
        orientation === 'vertical' && (
          <Label htmlFor="input-02" aria-required className='text-textdark-200'>Email</Label>

        )
      }
      <div className="relative">
        <Input required id="input-02" className="peer py-1 ps-9 bg-surface border-textdark-300" placeholder="Enter your email" type="email" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Icon icon="majesticons:mail-line" className="text-textdark-200 text-xl" />
        </div>
      </div>
    </div>

    <div className={cn("space-y-2 lg:col-span-1 pb-2")}>
      {
        orientation === 'vertical' && (
          <Label htmlFor="input-03" aria-required  className='text-textdark-200'>Phone</Label>
        )
      }
      <div className="relative">
        <Input required id="input-03" className="peer py-1 ps-9 bg-surface border-textdark-300" placeholder="Enter your phone no." type="number" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Icon icon="si:phone-fill" className="text-textdark-200 text-xl" />
        </div>
      </div>
    </div>
   
    <Button type='submit' className={cn('py-3  lg:w-fit hidden lg:flex',orientation == 'vertical'? '':'bg-[#561C11] hover:bg-[#561C11]/90')}>Get free 1 day pass</Button>
    </form>
  )
}

export default WaitlistForm