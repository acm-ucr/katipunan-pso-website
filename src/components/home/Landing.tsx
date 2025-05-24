"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Header from "@/public/components/HEADER.webp";
import Flower from "@/public/floral/blackflower.webp";
import Vine from "@/public/floral/blackshortvine.svg";
import Club from "@/public/home/Katipunan PSO.svg";

const Landing = () => {
  return (
    <div className="relative mx-auto my-40 w-max text-center sm:mt-50 sm:mb-80 sm:text-start">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="hidden lg:block"
      >
        <Image
          src={Flower}
          alt="FLOWER"
          className="absolute -top-25 -right-45"
        />
        <Image
          src={Flower}
          alt="FLOWER"
          className="absolute -bottom-55 -left-55"
        />
        <Image src={Vine} alt="VINE" className="absolute top-60 -left-35" />
        <Image
          src={Vine}
          alt="VINE"
          className="absolute -right-24 bottom-50 scale-x-[-1] scale-y-[-1]"
        />
        <Image
          src={Vine}
          alt="VINE"
          className="absolute -bottom-62 left-40 scale-x-[-1] rotate-90"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-inria-serif mb-3 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        University of California, Riverside
      </motion.h1>
      <div className="relative w-max">
        <Image
          src={Header}
          alt="Group"
          className="w-80 rounded-lg shadow-lg sm:w-120 md:w-150 lg:w-200 xl:w-250"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={Club}
            alt="UCR Katipunan PSO Text"
            className="hidden xl:absolute xl:right-0 xl:-bottom-20 xl:block"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
