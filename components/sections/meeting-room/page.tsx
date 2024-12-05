import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import { meetingRoom } from "@/constants/page";
import PricingCard from "../../pricing-card/page";

const MeetingRoom = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 px-10 py-[72px] bg-textdark-300">
      <h1 className="mobile3 text-surface text-center">Meeting Room</h1>

      <div className="overflow-hidden w-screen py-4 lg:hidden">
        <Carousel>
          <CarouselContent className="mx-10">
            {meetingRoom.map((plan, index) => (
              <CarouselItem key={index}>
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  amenities={plan.amenities}
                  alternate={plan.alternate}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden lg:flex flex-row gap-8 py-7 justify-center items-center">
        {meetingRoom.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            amenities={plan.amenities}
            alternate={plan.alternate}
          />
        ))}
      </div>
    </section>
  );
};

export default MeetingRoom;
