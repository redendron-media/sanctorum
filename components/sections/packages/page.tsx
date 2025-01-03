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

      <div className="overflow-hidden w-screen py-4 lg:hidden">
        {activeTab === "individual" && (
          <Carousel>
            <CarouselContent className="mx-10">
              {individual.map((plan, index) => (
                <CarouselItem key={index}>
                  <PricingCard
                    type= {plan.type}
                    title={plan.title}
                    price={plan.price}
                    amenities={plan.amenities}
                    alternate={plan.alternate}
                    link={plan.link}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
        {activeTab === "team" && (
          <Carousel>
            <CarouselContent className="mx-10">
              {team.map((plan, index) => (
                <CarouselItem key={index}>
                  <PricingCard
                  type={plan.type}
                    title={plan.title}
                    price={plan.price}
                    amenities={plan.amenities}
                    alternate={plan.alternate}
                    link={plan.link}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>

      <div className="lg:flex flex-row gap-8 items-center justify-center hidden py-7">
        {activeTab === "individual" && (
          <>
            {individual.map((plan, index) => (
              <PricingCard
                type="Individual"
                key={index}
                title={plan.title}
                price={plan.price}
                amenities={plan.amenities}
                alternate={plan.alternate}
                link={plan.link}
              />
            ))}
          </>
        )}
        {activeTab === "team" && (
          <>
            {team.map((plan, index) => (
              <PricingCard
              type="Team"
                key={index}
                title={plan.title}
                price={plan.price}
                amenities={plan.amenities}
                alternate={plan.alternate}
                link={plan.link}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Packages;
