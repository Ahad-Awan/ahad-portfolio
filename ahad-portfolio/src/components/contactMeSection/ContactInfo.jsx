import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo
        text="muhammadahad3813@gmail.com"
        Image={MdOutlineMailOutline}
      />
      <SingleInfo text="+92 3154833554" Image={FiPhone} />
      <SingleInfo text="Lahore, Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
