"use client";

import { motion } from "motion/react";
import Kuties from "@/public/suites/ModernKuties.webp";
import PACKN from "@/public/suites/ModernPACKN.webp";
import Project from "@/public/suites/ModernProjectRizzerside.webp";
import Seniors from "@/public/suites/ModernSeniors.webp";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Modern = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex justify-center"
      >
        <Image
          src={Project}
          alt="Modern Project Rizzerside"
          className="mx-0 mt-10 h-60 w-auto rounded-md sm:h-80 md:h-100 lg:h-120 xl:mx-80 xl:mt-20 xl:h-130"
        />
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image
          src={Kuties}
          alt="Modern Kuties"
          className="mx-0 mt-10 h-60 w-auto rounded-md sm:h-80 md:h-100 lg:h-120 xl:mx-80 xl:mt-20 xl:h-130"
        />
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image
          src={PACKN}
          alt="PACKN"
          className="mx-0 mt-10 h-60 w-auto rounded-md sm:h-80 md:h-100 lg:h-120 xl:mx-80 xl:mt-20 xl:h-130"
        />
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image
          src={Seniors}
          alt="Seniors"
          className="mx-0 mt-10 h-60 w-auto rounded-md sm:h-80 md:h-100 lg:h-120 xl:mx-80 xl:mt-20 xl:h-130"
        />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-inria-serif text-md mx-10 mt-15 inline-block justify-center text-center leading-12 md:text-lg lg:mx-30 lg:text-xl xl:mx-70"
      >
        Taking a step away from the traditional dances associated with the
        Philippines,
        <span className="mx-2 text-4xl text-blue-800 lg:text-5xl">MODERN</span>
        takes the stage as the gateway into what Philippine expression can look
        like today. Though it may not stem from Philippine history, the
        community is crafted through modern displays of Philippine youth through
        their own crafted lens. Not bound to a direct segment of time, the
        choreography is tied to the now, presenting the present moment of what
        intersections of self-expression and Philippine culture are for its
        participants.
      </motion.div>

      <div className="hidden xl:block">
        <Image
          src={blueFlower}
          alt="FLOWER"
          width={400}
          height={300}
          className="absolute top-120 -right-50"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={200}
          height={200}
          className="absolute top-130 left-0 scale-x-[-1]"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={250}
          height={200}
          className="absolute top-160 -left-5 scale-x-[-1] -rotate-10"
        />
      </div>
    </div>
  );
};

export default Modern;
