import React from "react";
import WaitlistForm from "../waitlist-form/page";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const FloatingButton = () => {
  return (
    <div className="lg:hidden">
      <Popover>
        <PopoverTrigger className="fixed bottom-10 right-10 z-50 ">
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
