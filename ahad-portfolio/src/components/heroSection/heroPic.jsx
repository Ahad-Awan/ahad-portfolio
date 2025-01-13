import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const heroPic = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <img
        src="../../public/images/hexaPic.png"
        alt="ahad image"
        className="max-h-[550px] w-auto"
      />
      <div className="absolute -z-10 justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default heroPic;
