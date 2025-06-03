"use client";
import { motion } from "motion/react";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

interface ContactProps {
  name: string;
  instagramLink: string;
}

const Contact = ({ name, instagramLink }: ContactProps) => {
  return (
    <div className="m-10 flex flex-col items-center xl:m-30">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="font-inria-serif text-md mb-10 text-center sm:text-xl xl:text-2xl"
      >
        For more information follow @{name}!
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          className="bg-kpso-blue mt-2 flex max-w-fit justify-center rounded-full p-4 lg:p-8"
          href={instagramLink}
          target="_blank"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaInstagram className="flex justify-center text-6xl text-neutral-50 lg:text-7xl" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
