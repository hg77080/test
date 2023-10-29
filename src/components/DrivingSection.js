import React from "react";
import Image from "next/image";
import automationImage from "@/assets/LandingPage/automation_driving.png";
import { AiOutlineArrowRight } from "react-icons/ai";

export const DrivingSection = () => {
  return (
    <div className="flex px-20 py-12 items-center">
      <div className="flex-1 ">
        <p className="text-3xl font-medium">AUTONOMOUS DRIVING</p>
        <p className="text-base mt-4 font-normal">
          I'm a paragraph. Click here to add your
          <br /> own text and edit me. It’s easy. Just click
          <br /> “Edit Text” or double click me to add <br />
          your own content and make changes to <br />
          the font. I’m a great place for you to tell <br />a story and let your
          users know a little
          <br /> more about you.
        </p>
        <div className="mt-6 flex cursor-pointer">
          <div className="border border-solid border-black rounded-l-md px-2 py-1 w-fit ">
            Read More
          </div>
          <div className="border border-solid border-black rounded-r-md px-2 py-1 w-fit flex items-center border-l-0">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image src={automationImage} />
      </div>
    </div>
  );
};
