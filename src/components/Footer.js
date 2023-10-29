import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#1D1F22] text-[#828385] px-[5%] py-8 font-light">
      <div className="flex justify-between font-medium">
        <div className="text-xs leading-6">
          <p className="text-lg">About</p>
          <p>What is ECOWATT</p>
          <p>ECOWATT leadership team</p>
        </div>
        <div className="text-xs leading-6">
          <p className="text-lg">REGIONS</p>
          <p>Sindalah</p>
          <p>THE LINE</p>
          <p>Trojena</p>
          <p>Oxagon</p>
          <p>Leyja</p>
        </div>
        <div className="text-xs leading-6">
          <p className="text-lg">OUR BUSINESS</p>
          <p>Sectors</p>
          <p>Partners</p>
          <p>Suppliers</p>
        </div>
        <div className="text-xs leading-6">
          <p className="text-lg">NEWS & SOCIAL</p>
          <p>News</p>
          <p>Media Gallery</p>
        </div>
      </div>
      <div
        className="flex justify-between mt-4 items-center border-t-[1px] border-solid border-[#343538] pt-4"
      >
        <p className="text-md">FOLLOW NEOM ON SOCIAL MEDIA</p>
        <div className="flex gap-3 text-lg">
          <FaFacebookSquare color="#EBC03F" />
          <FaLinkedin color="#EBC03F" />
          <FaTwitterSquare color="#EBC03F" />
          <FaInstagramSquare color="#EBC03F" />
          <FaYoutubeSquare color="#EBC03F" />
        </div>
      </div>
    </div>
  );
};
