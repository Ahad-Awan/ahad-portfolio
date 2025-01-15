import React from "react";

const SingleEducation = ({ education }) => {
  return (
    <div className="md:h-[390px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className="text-bold text-cyan">{education.study}</p>
      <p className="text-orange">{education.school}</p>
      <p className="text-lightGrey">{education.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {education.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleEducation;
