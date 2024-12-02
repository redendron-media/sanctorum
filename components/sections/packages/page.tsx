"use client";
import React, { useState } from "react";
import PricingCard from "../../pricing-card/page";
import { individual, team } from "@/constants/page";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import TabSelector from "../../tab/page";

const Packages = () => {
  const [activeTab, setActiveTab] = useState("individual");
  return (
    <section className="flex flex-col justify-center items-center gap-4 px-10 py-[72px] bg-textdark-200">
      <h1 className="mobile3 text-surface text-center">Packages</h1>
      <TabSelector
        tabs={[
          { label: "Individual", id: "individual" },
          { label: "Team", id: "team" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="overflow-hidden w-screen py-4">
        {activeTab === "individual" && (
          <Carousel>
            <CarouselContent className="ml-10">
              {individual.map((plan, index) => (
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
        )}
        {activeTab === "team" && (
          <Carousel>
            <CarouselContent className="ml-10">
              {team.map((plan, index) => (
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
        )}
      </div>
    </section>
  );
};

export default Packages;
