import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 pr-12">
      <div className="text-white text-xl font-semibold tracking-widest">ECOWATT</div>
      <div className="flex items-center gap-4 text-offwhite text-sm font-normal">
        <p>ABOUT</p>
        <p>REGIONS</p>
        <p>OUR BUSINESS</p>
        <p>NEWS</p>
        <p>INVEST</p>
      </div>
    </div>
  );
};
