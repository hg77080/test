import React from "react";
import WinterSolarImage from "@/assets/LandingPage/winter_solar.png";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Testmonials = () => {
  return (
    <div
      className="h-screen bg-no-repeat text-white flex justify-end items-center pr-20"
      style={{
        background: `url('${WinterSolarImage.src}') #000000`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="bg-light_grey p-4  rounded-md top-8 font-normal w-[25%]">
        <p className="text-sm">WHY ECOWATT</p>
        <p className="text-xl mt-4">
          A different approach, using a new method of manufacturing.
        </p>
        <p className="text-xs mt-3">
          Ecowatt is a solar panel company that offers several compelling
          reasons for people to choose their products and services:
          Environmental Benefits, Cost Savings, Energy Independence, Quality and
          Reliability, Customized Solutions, Support and Maintenance. Ecowatt as
          a solar panel company due to its commitment to sustainability,
          cost-saving potential, energy independence, government incentives,
          quality products, customized solutions, and ongoing support. It offers
          a holistic approach to renewable energy adoption.
        </p>
        <div className="mt-6 flex cursor-pointer ">
          <div className="border border-solid border-white rounded-l-md px-2 py-1 w-fit bg-black">
            Read More
          </div>
          <div className="border border-solid border-white rounded-r-md px-2 py-1 w-fit flex items-center bg-black border-l-0">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
