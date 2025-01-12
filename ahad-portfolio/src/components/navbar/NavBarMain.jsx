import React from "react";
import NavBarlogo from "./NavBarlogo";
import NavBarLinks from "./NavBarLinks";
import NavBarBtn from "./NavBarBtn";

const NavBarMain = () => {
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] translate-x-[-50%] z-20 flex gap mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto items-center bg-black p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange ">
        <NavBarlogo />
        <NavBarLinks />
        <NavBarBtn />
      </div>
    </nav>
  );
};

export default NavBarMain;
