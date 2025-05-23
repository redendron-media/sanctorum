import React from "react";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import { PricingCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Booking from "../book-your-seatform/page";
import Link from "next/link";

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  amenities,
  alternate,
  type,
  link
}) => {
  function formatIndianPrice(price: number): string {
    return price.toLocaleString("en-IN");
  }
  return (
    <Card
      className={cn(
        "w-[222px] p-5 flex flex-col gap-6 rounded-lg h-fit shadow-none",
        alternate === true ? "bg-sec" : "bg-surface"
      )}
    >
      <div className="flex flex-col  divide-y divide-dashed divide-textdark">
        <h6 className="mobile6 text-textdark pb-4">{title}</h6>
        <div className="flex flex-col gap-1 pt-4">
          <h3 className="mobile3 lg:text-4xl">
            Rs.{formatIndianPrice(Number(price))}
          </h3>
          <p className="font-im_fell_italic text-textdark-300">
            {title === "Daily"
              ? "per day"
              : title === "Weekly"
              ? "per week"
              : title === "Hourly"
              ? "per hour"
              : title === "Quarterly"
              ? "per quarter"
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
      <Link href={link}>
      <Button>Book your seat</Button>
      </Link>
      {/* <Dialog>
        <DialogTrigger className=" w-full bg-primary text-sec  shadow hover:bg-primary/90 px-6 py-2 rounded-lg">
          <p className="font-im_fell text-base">Book your seat</p>
        </DialogTrigger>
        <DialogContent className="w-[80%] bg-surface">
          <DialogHeader>
            <DialogDescription />
            <DialogTitle className="text-center mobile3">
              Book your seat
            </DialogTitle>
            <Booking cost={price} title={title} type={type} />
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </Card>
  );
};

export default PricingCard;
