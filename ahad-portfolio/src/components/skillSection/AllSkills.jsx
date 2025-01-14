import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: SiCss3,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TailwindCss",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "GitHub",
    icon: IoLogoGithub,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
