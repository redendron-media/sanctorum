import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Icon } from "@iconify/react";
import { amenities } from "@/constants/page";
const Amenities = () => {
  return (
    <section className="py-[72px] bg-primary/50 overflow-hidden w-full">
      <Carousel className="lg:hidden">
        <CarouselContent className="mx-10">
          {amenities.map((amenity, index) => (
            <CarouselItem key={index} className="pl-7">
              <div className="flex flex-col gap-3 ">
                <div className="flex gap-1">
                  <Icon
                    icon="mingcute:check-fill"
                    className="text-[#D9D9D9] text-xl"
                  />
                  <h4 className="mobile4 text-white">{amenity.title}</h4>
                </div>
                <p className="text-white font-im_fell_pika leading-[18px] text-xs w-[107px]">
                  {amenity.desc}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="hidden lg:flex gap-7 justify-center items-start">
        {amenities.map((amenity, index) => (
          <div className="flex flex-col gap-3  justify-center" key={index}>
            <div className="flex gap-1 items-center">
              <Icon
                icon="mingcute:check-fill"
                className="text-[#D9D9D9] text-xl"
              />
              <h4 className="mobile4 text-white">{amenity.title}</h4>
            </div>
            <p className="text-white font-im_fell_pika leading-[18px] text-base w-[150px]">
              {amenity.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
