"use client";

import { motion } from "motion/react";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";
import Maria from "@/public/suites/MariaClara.webp";

const MariaClara = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex justify-center"
      >
        <Image
          src={Maria}
          alt="Maria Clara Image"
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
          MARIA CLARA
        </span>{" "}
        is heavily influenced by the Spanish during its colonization period from
        the 1500s to the 1800s. Dances from this suite represent the wealthy
        mestizas and mestizos (those of mixed Philippine and Spanish heritage)
        of the Philippines, capturing their elegance and boldness. As the
        dancers perform with a smile and confidence, they tell a story of
        courtship, love, and flirtation. The dances were heavily influenced by
        colonization and still encapsulate the native flare and style of the
        Philippines.
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

export default MariaClara;
