"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import Sun from "@/public/components/Sun.svg";

const Quote = ({ Phrase, Source }: { Phrase: string; Source: string }) => {
  return (
    <div className="font-inria-serif flex flex-row overflow-x-hidden bg-gradient-to-b from-transparent via-[#51578160] to-[#2A3993]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        viewport={{ once: true }}
        className="ml-10 flex self-auto pt-5 text-4xl text-white sm:ml-30 sm:pt-15 sm:text-5xl md:pt-35 md:text-7xl lg:text-9xl"
      >
        ❝
      </motion.div>
      <div className="-mr-10 ml-auto flex flex-col items-center justify-center text-white sm:-mr-20 md:-mr-30">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg sm:text-2xl md:text-3xl xl:text-4xl"
        >
          {Phrase}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-5 text-sm sm:text-xl md:text-2xl xl:text-3xl"
        >
          {Source}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-15 ml-auto flex flex-shrink-0 justify-end"
      >
        <Image
          src={Sun}
          alt="Filipino Sun"
          className="h-auto w-50 object-contain sm:w-80 md:w-120 xl:w-170"
        />
      </motion.div>
    </div>
  );
};

export default Quote;
