"use client";
import { motion } from "motion/react";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Contact = ({
  name,
  instagramLink,
}: {
  name: string;
  instagramLink: string;
}) => {
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
          className="bg-kpso-blue mt-2 flex max-w-fit justify-center rounded-full p-5 xl:p-12"
          href={instagramLink}
          target="_blank"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaInstagram className="flex h-10 w-10 justify-center text-neutral-50 sm:h-15 sm:w-15 xl:h-20 xl:w-20" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
