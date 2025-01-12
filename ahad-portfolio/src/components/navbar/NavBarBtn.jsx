import React from "react";
import { IoMdDownload } from "react-icons/io";
const NavBarBtn = () => {
  const downloadResume = () => {
    window.open("/ahad cv.pdf", "_blank");
  };

  return (
    <button
      className="px-4 py-2 rounded-full text-xl font-bold text-black border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
      onClick={downloadResume}
    >
      Resume
      <IoMdDownload />
    </button>
  );
};

export default NavBarBtn;
