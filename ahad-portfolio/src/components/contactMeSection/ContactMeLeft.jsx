import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeLeft = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col gap-8 w-full"
    >
      <div>
        <h2 className="text-orange text-3xl mb-4">Get In Touch</h2>
        <p className="text-white">
          Feels free to reach out if you'd like to collaborate <br /> you are
          just a few clicks away!
        </p>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default ContactMeLeft;
