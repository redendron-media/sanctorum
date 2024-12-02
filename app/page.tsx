import Amenities from "@/components/sections/amenities/page";
import Hero from "@/components/sections/hero/page";
import MeetingRoom from "@/components/sections/meeting-room/page";
import Packages from "@/components/sections/packages/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Packages />
      <MeetingRoom/>
      <Amenities/>
    </main>
  );
}
