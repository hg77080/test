import React from "react";
import BgImage from "@/assets/LandingPage/hero_section.png";
import { Navbar } from "./Navbar";

export const Herosection = () => {
  return (
    <div
      className="h-screen bg-no-repeat text-white relative"
      style={{
        background: `url('${BgImage.src}') #000000`,
        backgroundSize: "100% 100%",
      }}
    >
      <Navbar />
      <div className=" flex flex-col justify-center pl-[10vw] gap-4 h-full absolute top-0">
        <p className="text-2xl font-medium">Harness the Power of the Sun</p>
        <p className="text-5xl font-semibold">WORK FOR YOU</p>
        <p className="text-lg font-normal">
          From Installation and Repairs to Energy System Rentals .
        </p>
      </div>
    </div>
  );
};
