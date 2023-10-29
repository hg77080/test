import React from "react";
import Image from "next/image";
import informationImage from "@/assets/LandingPage/real_information.png";
import { AiOutlineArrowRight } from "react-icons/ai";

export const RealInformationSection = () => {
  return (
    <div className="flex px-20 py-12 items-center">
      <div className="flex-1">
        <Image src={informationImage} />
      </div>
      <div className="flex-1">
        <p className="text-3xl font-medium px-20">REAL-TIME INFORMATION</p>
        <p className="text-base mt-4 font-normal px-20">
          I'm a paragraph. Click here to add your <br />
          own text and edit me. It’s easy. Just click <br />
          “Edit Text” or double click me to add <br />
          your own content and make changes to
          <br /> the font. I’m a great place for you to tell
          <br /> a story and let your users know a little <br />
          more about you.
        </p>
        <div className="mt-6 mx-20 flex cursor-pointer">
          <div className="border border-solid border-black rounded-l-md px-2 py-1 w-fit ">
            Read More
          </div>
          <div className="border border-solid border-black rounded-r-md px-2 py-1 w-fit flex items-center border-l-0">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
