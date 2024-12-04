import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WaitlistForm from "../waitlist-form/page";

const FloatingButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="fixed bottom-10 z-20 right-10 size-20 rounded-full bg-primary line-clamp-2 text-balance flex items-center justify-center">
          <p className="text-sec text-center">One Day Free Pass</p>
        </div>
      </DialogTrigger>

      <DialogContent className="w-[80%] bg-sec flex flex-col items-center justify-center rounded-lg">
      
        <DialogClose />
        <WaitlistForm />
      </DialogContent>
    </Dialog>
  );
};

export default FloatingButton;
