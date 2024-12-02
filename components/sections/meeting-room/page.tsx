import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel'
import { meetingRoom } from '@/constants/page'
import PricingCard from '../../pricing-card/page'

const MeetingRoom = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 px-10 py-[72px] bg-textdark-300">
    <h1 className="mobile3 text-surface text-center">Meeting Room</h1>
 
    <div className="overflow-hidden w-screen py-4">
            <Carousel>
            <CarouselContent className="ml-10">
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
  </section>
  )
}

export default MeetingRoom