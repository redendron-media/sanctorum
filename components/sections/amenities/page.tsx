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
    <section className="py-[72px] bg-primary/50 overflow-hidden w-full flex flex-col gap-8 lg:gap-12">
      <h1 className="mobile3 text-white text-center">Amenities</h1>
      <Carousel className="lg:hidden">
        <CarouselContent className="mx-10">
          {amenities.map((amenity, index) => (
            <CarouselItem key={index} className="pl-7">
              <div className="flex flex-row gap-2 h-full justify-center">
              <Icon
                    icon={amenity.icon}
                    className="text-[#D9D9D9] text-2xl"
                  />
                <div className="flex flex-col gap-3">
                  
                  <h4 className="mobile4 text-white">{amenity.title}</h4>
                  <p className="text-white font-im_fell_pika leading-[18px] text-xs w-[107px]">
                  {amenity.desc}
                </p>
                </div>
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="hidden lg:flex gap-1 justify-center items-start">
        {amenities.map((amenity, index) => (
          <div className="flex flex-row gap-1 h-full justify-center" key={index}>
             <Icon
                icon={amenity.icon}
                className="text-[#D9D9D9] text-3xl h-full"
              /> 
            <div className="flex flex-col gap-3 ">
             
              <h4 className="mobile4 text-white">{amenity.title}</h4>
              <p className="text-white font-im_fell_pika leading-[18px] text-base w-[150px]">
              {amenity.desc}
            </p>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
