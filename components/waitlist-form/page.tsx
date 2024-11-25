import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import { Button } from '../ui/button';

const WaitlistForm = () => {
  return (
    <form action="" className='flex flex-col gap-2'>
    <div className="space-y-2 lg:col-span-1">
      <Label htmlFor="input-01" aria-required className='text-textdark-200'>Name</Label>
      <div className="relative">
        <Input required id="input-01" className="peer bg-surface border-textdark-300" placeholder="Enter your name here" type="text" />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="input-02" className='text-textdark-200'>Email</Label>
      <div className="relative">
        <Input required id="input-02" className="peer ps-9" placeholder="Enter your email" type="email" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Icon icon="majesticons:mail-line" className="text-textdark-200 text-xl" />
        </div>
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="input-03" className='text-textdark-200'>Phone</Label>
      <div className="relative">
        <Input required id="input-03" className="peer ps-9" placeholder="Enter your phone no." type="number" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Icon icon="si:phone-fill" className="text-textdark-200 text-xl" />
        </div>
      </div>
    </div>
    <Button type='submit' className='py-3 mt-8'>Get your free 1 day pass</Button>
    </form>
  )
}

export default WaitlistForm