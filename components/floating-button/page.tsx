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
    <div>
      <Dialog>
        <DialogTrigger className="fixed bottom-10 right-10 z-50">
          <div className="size-20 rounded-full bg-primary line-clamp-2 text-balance flex items-center justify-center">
            <p className="text-sec text-center">One Day Free Pass</p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-[80%] bg-sec flex flex-col items-center justify-center rounded-lg">
          <DialogTitle />
          <DialogClose />
          <WaitlistForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FloatingButton;
