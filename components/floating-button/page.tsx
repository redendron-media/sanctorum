import React from "react";
import WaitlistForm from "../waitlist-form/page";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link";
import Image from "next/image";


const FloatingButton = () => {
  return (                       
    <div className=" fixed bottom-6 md:bottom-10 right-3 md:right-6 z-40 flex flex-col gap-4">
    <Link href={'https://wa.link/gn0lem'} target="_blank">
    <Image src={'/whatsapp.png'} width={80} height={80} alt={`<a href='https://pngtree.com/freepng/whatsapp-icon_8704827.html'>png image from pngtree.com/</a>`}/>
    </Link>
      <Popover>
        <PopoverTrigger className="lg:hidden">
        <div className="size-20 rounded-full bg-[#561C11] hover:bg-[#561C11]/90 shadow-md line-clamp-2 text-balance flex items-center justify-center">
            <p className="text-sec text-center">One Day Free Pass</p>
          </div>
        </PopoverTrigger>
        <PopoverContent className="bg-surface mr-4 mb-4 py-8">
        <WaitlistForm />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingButton;
