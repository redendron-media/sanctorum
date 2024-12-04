import Amenities from "@/components/sections/amenities/page";
import Contact from "@/components/sections/contact/page";
import Events from "@/components/sections/events/page";
import Hero from "@/components/sections/hero/page";
import MeetingRoom from "@/components/sections/meeting-room/page";
import Packages from "@/components/sections/packages/page";

export default function Home() {
  return (
    <main className="w-screen overflow-hidden">
      <Hero />
      <Packages />
      <MeetingRoom/>
      <Amenities/>
      <Events/>
      <Contact/>
    </main>
  );
}
