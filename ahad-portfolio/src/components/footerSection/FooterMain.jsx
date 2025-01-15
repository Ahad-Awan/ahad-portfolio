import React from "react";

const FooterMain = () => {
  return (
    <footer className="bg-gray-800 px-4 py-6">
      <div className="w-full h-[1px] bg-lightGrey mt-10"></div>
      <div className="w-full h-[1px] bg-gray-600 mb-6"></div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto text-white">
        <p className="text-3xl font-bold mb-4 md:mb-0">Muhammad Ahad</p>
        <p className="text-sm text-gray-400 text-center md:text-right">
          © 2025 Muhammad Ahad | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
