import React from "react";
import SingleEducation from "./SingleEducation";
import { FaArrowRight } from "react-icons/fa6";

const educations = [
  {
    study: "Matriculation",
    school: "Ch Rahmat Ali Boys High School",
    date: "2016 - 2018",
    responsibilities: [
      "Major Subjects Include: Computer Science, Mathematics, Physics",
      "A+ Grade",
      "Skills: Quick Learner and Adaptable",
      "Strengths: Positive Attitude, Hardworking and Dedicated, Team Oriented",
    ],
  },
  {
    study: "ICS",
    school: "Govt. Graduate College Township, Lahore",
    date: "2018 - 2020",
    responsibilities: [
      "Major Subjects Include: Computer Science, Mathematics, Physics",
      "A Grade",
      "Skills: Quick Learner and Adaptable",
      "Strengths: Positive Attitude, Hardworking and Dedicated, Team Oriented",
    ],
  },
  {
    study: "BS Information Technology",
    school: "Govt. Graduate College Township, Lahore",
    date: "2020 - 2024",
    responsibilities: [
      "Affiliated With Punjab University",
      "Major Subjects Include: PF, DSA, DLD, DBMS",
      "2.75 CGPA",
      "Skills: Quick Learner and Adaptable",
      "Strengths: Hardworking and Dedicated, Team Oriented",
    ],
  },
];

const AllEducation = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {educations.map((education, index) => {
        return (
          <>
            <SingleEducation key={index} education={education} />
            {index < 2 ? (
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllEducation;
