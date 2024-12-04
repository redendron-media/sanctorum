import { Button } from "@/components/ui/button";
import React from "react";

const Events = () => {
  return (
    <section className="bg-surface gap-4 px-10 py-[72px] flex flex-col justify-center">
      <h1 className=" text-textdark text-center mobile3">Events</h1>
      <div className="flex flex-col gap-7 items-center">
        <p className="text-textdark-300 text-center text-balance line-clamp-2">
          Get in the loop with talks, workshops, and creative sessions right
          here in Gangtok. From solo working sessions to community events, we
          bring together minds that inspire.
        </p>
        <Button className="font-im_fell w-full lg:w-fit">Book venue for event</Button>
      </div>
    </section>
  );
};

export default Events;
