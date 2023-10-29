import { DrivingSection } from "@/components/DrivingSection";
import { Footer } from "@/components/Footer";
import { Herosection } from "@/components/Herosection";
import { Navbar } from "@/components/Navbar";
import { PerceptionSection } from "@/components/PerceptionSection";
import { RealInformationSection } from "@/components/RealInformationSection";
import { Service } from "@/components/Service";
import { Testmonials } from "@/components/Testmonials";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Herosection />
      <Service />
      <DrivingSection />
      <RealInformationSection />
      <PerceptionSection />
      <Testmonials/>
      <Footer />
    </>
  );
}
