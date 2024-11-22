import React from "react";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import { PricingCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const PricingCard: React.FC<PricingCardProps> = ({ title, price, amenities }) => {
  return (
    <Card  className={cn(
        "w-[222px] p-5 flex flex-col gap-6 rounded-lg h-fit",
        title === "Monthly" ? "bg-sec" : "bg-white"
      )}>
      <div className="flex flex-col  divide-y divide-dashed divide-textdark">
        <h6 className="mobile6 text-textdark pb-4">{title}</h6>
        <div className="flex flex-col gap-1 pt-4">
          <h3 className="mobile3">Rs. {price}</h3>
          <p className="font-im_fell_italic text-textdark-300">
  {title === "Daily"
    ? "per day"
    : title === "Weekly"
    ? "per week"
    : "per month"}
</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
      {amenities.map((amenity, index) => (
          <div className="flex gap-2" key={index}>
            <Icon icon="mingcute:check-fill" className="text-primary text-xl" />
            <p className="text-primary">{amenity}</p>
          </div>
        ))}
      </div>
      <Button>
        <p className="uppercase text-base px-6">book your seat</p>
      </Button>
    </Card>
  );
};

export default PricingCard;
