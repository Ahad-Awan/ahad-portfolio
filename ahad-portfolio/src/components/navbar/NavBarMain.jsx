import React from "react";
import NavBarlogo from "./NavBarlogo";
import NavBarLinks from "./NavBarLinks";
import NavBarBtn from "./NavBarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBarMain = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const toogleMenu = () => {
    setmenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] translate-x-[-50%] z-20 flex gap mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto items-center bg-black p-5 rounded-r-full rounded-l-full border-[0.5px] border-orange ">
        <NavBarlogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavBarLinks />
        </div>
        <NavBarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange ml-2">
        <button
          className="text-2xl p-3 border border-orange rounded-full text-white"
          onClick={toogleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavBarMain;
