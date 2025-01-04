"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  orientation?: "vertical" | "horizontal";
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({
  orientation = "vertical",
}) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setStatus('Sending...');
          setIsSubmitting(true); 
          try {
            console.log(formData);
            
            const response = await fetch('/api/one-day-pass', {
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
       <section className={cn('z-20 items-center flex-col gap-4 flex', orientation === 'vertical'? '':'text-surface')}>
       <h6 className='mobile6 text-center'>We&apos;re thrilled to confirm your free one-day pass at Sanctorum.</h6>
       <p className="text-center">You will receive an email with further details.</p>
     </section>
    ):(
        <form
        onSubmit={handleSubmit}
        className={cn(
          "flex z-20 flex-col gap-2 items-center",
          orientation == "vertical"
            ? "flex-col gap-2 flex"
            : "lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-6 hidden"
        )}
      >
        <div className={cn("space-y-2 lg:col-span-1 pb-2")}>
          {orientation === "vertical" && (
            <Label htmlFor="name" aria-required className="text-textdark-200">
              Name
            </Label>
          )}
          <div className="relative">
            <Input
              required
              id="name"
              onChange={handleChange}
              className="peer ps-9 bg-surface border-textdark-300 py-1"
              placeholder="Enter your name here"
              type="text"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
              <Icon
                icon="material-symbols:person"
                className="text-textdark-200 text-xl"
              />
            </div>
          </div>
        </div>
  
        <div className={cn("space-y-2 lg:col-span-1 pb-2")}>
          {orientation === "vertical" && (
            <Label htmlFor="email" aria-required className="text-textdark-200">
              Email
            </Label>
          )}
          <div className="relative">
            <Input
              required
              id="email"
              onChange={handleChange}
              className="peer py-1 ps-9 bg-surface border-textdark-300"
              placeholder="Enter your email"
              type="email"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
              <Icon
                icon="majesticons:mail-line"
                className="text-textdark-200 text-xl"
              />
            </div>
          </div>
        </div>
  
        <div className={cn("space-y-2 lg:col-span-1 pb-2")}>
          {orientation === "vertical" && (
            <Label htmlFor="phone" aria-required className="text-textdark-200">
              Phone
            </Label>
          )}
          <div className="relative">
            <Input
              required
              onChange={handleChange}
              id="phone"
              className="peer py-1 ps-9 bg-surface border-textdark-300"
              placeholder="Enter your phone no."
              type="number"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
              <Icon icon="si:phone-fill" className="text-textdark-200 text-xl" />
            </div>
          </div>
        </div>
  
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "py-3  lg:w-fit flex",
            orientation == "vertical" ? "" : "bg-[#561C11] hover:bg-[#561C11]/90"
          )}
        >
         {isSubmitting ? 'Submitting...' : 'Get free 1 day pass'}
        </Button>
      </form>
    )}
  </div>
  );
};

export default WaitlistForm;
