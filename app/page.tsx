import PricingCard from "@/components/pricing-card/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4 py-20 items-start w-full justify-center">
      <PricingCard
        title="Daily"
        price="350"
        amenities={[
          "Hot Desk (Shared)",
          "Hi-speed Internet",
          "Unlimited Free Coffee",
          "24 Hours Validity",
        ]}
      />
      <PricingCard
        title="Monthly"
        price="6,000"
        amenities={[
          "Dedicated Desk",
          "Hi-speed Internet",
          "Unlimited Free Coffee",
          "Free Office Address",
          "5 hrs Meeting Rooms",
          "30 days Validity"
        ]}
      />
       <PricingCard
        title="Weekly"
        price="1,000"
        amenities={[
          "Hot Desk (Shared)",
          "Hi-speed Internet",
          "Unlimited Free Coffee",
          "3 hrs Meeting Rooms",
          "7 days Validity"
        ]}
      />
    </div>
  );
}
