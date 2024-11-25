import PricingCard from "@/components/pricing-card/page";
import WaitlistForm from "@/components/waitlist-form/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center w-full justify-center bg-primary/50 h-svh px-10 py-[72px]">
        <h3 className="mobile3 text-white text-center text-balance">Launching December 5th</h3>
        <p className="text-white">Join the waitlist</p>
        <WaitlistForm/>
    </div>
  );
}
