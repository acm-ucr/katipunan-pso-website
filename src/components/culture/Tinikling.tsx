"use client";

import { motion } from "motion/react";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";
import Tinikling_img from "@/public/suites/Tinikling.webp";

const Tinikling = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex justify-center"
      >
        <Image
          src={Tinikling_img}
          alt="Tinikling Image"
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
        <span className="mr-2 text-4xl text-blue-800 lg:text-5xl">
          TINIKLING
        </span>
        is a traditional Philippine folk dance that originated during the
        Spanish colonial era. The dance involves two people beating, tapping,
        and sliding bamboo poles on the ground and against each other in
        coordination with one or more dancers who step over and in between the
        poles in a dance. It’s meant to imitate the tinkling birds stepping over
        the bamboo traps that farmers made.
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
          className="absolute top-100 left-0 scale-x-[-1]"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={250}
          height={200}
          className="absolute top-130 -left-5 scale-x-[-1] -rotate-10"
        />
      </div>
    </div>
  );
};

export default Tinikling;
