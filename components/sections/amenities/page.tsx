'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { amenities } from "@/constants/page";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
const Amenities = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  )
  return (
    <section className="py-[72px] lg:py-[120px] bg-primary/50 overflow-hidden w-full flex flex-col gap-8 lg:gap-12">
      <h1 className="mobile3 text-white text-center">Amenities</h1>
      <Carousel
        plugins={[plugin.current]} 
       
        opts={{
        loop:true,
      }}>
        <CarouselContent className="mx-10">
          {amenities.map((amenity, index) => (
            <CarouselItem key={index} className="pl-7">
              <div className="flex flex-col bg-textdark p-4 rounded-lg h-fit gap-7 w-[211px] lg:w-[250px]">
                <div className="h-[206px] w-[179px] lg:w-[218px] relative object-cover">
                <Image className="select-none" src={`/amenities/${amenity.image}.webp`} fill alt={amenity.title}/>
                </div>
                <div className="flex flex-col gap-2">                  
                  <h4 className="mobile4 text-white grow select-none">{amenity.title}</h4>
                  <p className="text-white font-im_fell_pika leading-[18px] select-none text-xs w-full text-balance lg:text-sm">
                  {amenity.desc}
                </p>
                </div>
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* <div className="hidden lg:flex gap-1 justify-center items-start">
        {amenities.map((amenity, index) => (
          <div className="flex flex-col bg-textdark p-4 rounded-lg h-full gap-7 w-[211px]" key={index}>
            <Image src={`/amenities/${amenity.image}.png`} width={179} height={206} alt={amenity.title}/>
            <div className="flex flex-col gap-2">
             
              <h4 className="mobile4 text-white">{amenity.title}</h4>
              <p className="text-white font-im_fell_pika leading-[18px] text-base w-[150px]">
              {amenity.desc}
            </p>
            </div>
           
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Amenities;
