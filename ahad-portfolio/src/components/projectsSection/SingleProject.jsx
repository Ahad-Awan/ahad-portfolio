import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ title, description, link, align, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange ">{title}</h2>
        <p
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          } mt-2 mb-4`}
        >
          {description}
        </p>
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500  cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          } `}
        >
          Live Preview <BiSolidRightTopArrowCircle />{" "}
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative  border-white border-2">
        <img src={image} alt="project image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
