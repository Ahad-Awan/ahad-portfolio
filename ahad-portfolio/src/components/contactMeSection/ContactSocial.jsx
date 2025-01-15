import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/muhammad-ahad1/"
        Icon={FaLinkedin}
      />
      <SingleContactSocial
        link="https://github.com/Ahad-Awan"
        Icon={IoLogoGithub}
      />
    </div>
  );
};

export default ContactSocial;
