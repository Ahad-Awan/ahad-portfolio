import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    title: "Artificial Teaching Assistant",
    description:
      "Technologies : ReactJS, NodeJS, MongoDB, AWS Services, Ai Model and TailwindCSS ",
    link: "https://algoritmi-ata-fe.netlify.app/",
    align: "right",
    image: "/images/ATA.png",
  },
  {
    title: "E-Learn",
    description: "Technologies : HTML and CSS",
    link: "#",
    align: "left",
    image: "/images/E-Learn.png",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    link: "#",
    align: "right",
    image: "/images/website-img-3.jpg",
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    link: "#",
    align: "left",
    image: "/images/website-img-4.jpg",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
