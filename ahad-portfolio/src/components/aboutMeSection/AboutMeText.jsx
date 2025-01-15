import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white text-[17.5px]">
        I am an adaptable, conscientious, and ambitious individual, able to
        quickly acquire new skills. I thrive in high tech environments where my
        educational background and professional skills can be effectively
        utilized. I seek opportunities that offer challenges and enable me to
        contribute to cutting edge advancements while continuously growing in my
        career.
      </p>
      {/* <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-black">
        My Projects
      </button> */}
    </div>
  );
};

export default AboutMeText;
