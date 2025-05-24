"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Social from "@/public/home/Social.svg";
import Academic from "@/public/home/Academic.svg";
import Cultural from "@/public/home/Cultural.svg";
import Community from "@/public/home/Community.svg";

const Pillars = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="overflow-x-hidden"
        >
          <Image
            src={Social}
            alt="SOCIAL IMAGE"
            className="w-full object-cover pr-30"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-inria-serif absolute top-10 right-0 text-center text-4xl text-black sm:top-20 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          SOCIAL
          <div className="mt-3 h-1 w-50 bg-black sm:w-80 md:w-160" />
        </motion.div>
      </div>

      <div className="relative w-full">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="overflow-x-hidden"
        >
          <Image
            src={Academic}
            alt="ACADEMIC IMAGE"
            className="mt-10 w-full object-cover pl-30 sm:mt-20 md:mt-20 lg:mt-0"
          />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-inria-serif absolute top-0 left-0 text-center text-4xl text-black sm:text-6xl md:text-7xl lg:text-8xl"
        >
          ACADEMIC
          <div className="mt-3 h-1 w-50 bg-black sm:w-100 md:w-160" />
        </motion.div>
      </div>

      <div className="relative w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="overflow-x-hidden"
        >
          <Image
            src={Cultural}
            alt="CULTURAL IMAGE"
            className="w-full object-cover pr-30"
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-inria-serif absolute top-5 right-0 text-center text-4xl text-black sm:top-15 sm:text-6xl md:top-20 md:text-7xl lg:top-50 lg:text-8xl"
        >
          CULTURAL
          <div className="mt-3 h-1 w-60 bg-black sm:w-100 md:w-160" />
        </motion.div>
      </div>

      <div className="relative w-full">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="overflow-x-hidden"
        >
          <Image
            src={Community}
            alt="COMMUNITY IMAGE"
            className="w-full object-cover pl-30"
          />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-inria-serif absolute top-0 left-0 text-center text-4xl text-black sm:text-6xl md:top-5 md:text-7xl lg:top-10 lg:text-8xl"
        >
          COMMUNITY
          <div className="mt-3 h-1 w-60 bg-black sm:w-100 md:w-160" />
        </motion.div>
      </div>
    </div>
  );
};

export default Pillars;
