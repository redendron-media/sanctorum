"use client";
import WaitlistForm from "@/components/waitlist-form/page";
import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000})
  )
 
  const images = [
    {
      name: "First",
      src: "1",
    },
    {
      name: "Second",
      src: "2",
    },
    {
      name: "Third",
      src: "3",
    },
    {
      name: "Fourth",
      src: "4",
    },
    {
      name: "address",
      src: "address",
    },
    {
      name: "coffee",
      src: "coffee",
    },
    {
      name: "common",
      src: "common",
    },
    {
      name: "desk",
      src: "desk",
    },
    {
      name: "internet",
      src: "internet",
    },
    {
      name: "library",
      src: "library",
    },
    {
      name: "meeting",
      src: "meeting",
    },
    {
      name: "podcast",
      src: "podcast",
    },
  ];
  return (
    <section className="flex relative flex-col h-[88amsvh] lg:h-[85svh] items-center justify-center w-full gap-4 lg:gap-8 overflow-hidden">
      <div className="lg:px-10 px-10 py-[72px] lg:py-[180px] z-10 flex flex-col gap-4 lg:gap-8 items-center">
        <h1 className="mobile3 text-white font-im_fell text-balance text-center z-10">
          It&apos;s more than just a desk
        </h1>
        <p className="text-white text-center text-pretty lg:text-lg lg:line-clamp-2 lg:max-w-2xl z-10">
          Sanctorum is a coworking space in Gangtok designed for entrepreneurs,
          freelancers, and professionals who value a productive and
          collaborative environment.
        </p>
        <WaitlistForm orientation="horizontal" />
      </div>
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10"/>
        <Carousel className="relative h-full w-full"  plugins={[plugin.current]} opts={{
          loop:true
        }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="relative z-0 w-full h-screen">
                <Image
                  src={`/amenities/${image.src}.webp`}
                  alt={image.name}
                  fill className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
