import React from "react";
import HeroPic from "./heroPic";
import HeroText from "./heroText";
const heroMain = () => {
  return (
    <div className="pt-40 pb-10">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default heroMain;
