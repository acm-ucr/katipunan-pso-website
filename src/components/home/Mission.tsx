"use client";
import { motion } from "motion/react";

import React from "react";
import Image from "next/image";
import Flower from "@/public/floral/blueflower.webp";
import Vine from "@/public/floral/cornervines.svg";

const Mission = () => {
  return (
    <div className="font-inria-serif relative w-full overflow-x-hidden overflow-y-hidden bg-[#F0EBE5] px-25 sm:mt-50 sm:px-20 md:px-0">
      <Image
        src={Flower}
        alt="Flower TL"
        className="absolute hidden xl:top-10 xl:-left-40 xl:block xl:w-120"
      />

      <Image
        src={Vine}
        alt="Vine BL"
        className="absolute hidden w-60 xl:bottom-10 xl:left-30 xl:block"
      />

      <Image
        src={Vine}
        alt="Vine TR"
        className="absolute hidden w-60 scale-x-[-1] scale-y-[-1] xl:top-10 xl:right-30 xl:block"
      />

      <Image
        src={Flower}
        alt="Flower BR"
        className="absolute hidden xl:-right-40 xl:bottom-10 xl:block xl:w-120"
      />

      <div className="relative z-10 mx-auto max-w-3xl py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-kpso-blue text-4xl sm:text-6xl"
        >
          Mission Statement
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-5 text-2xl sm:text-3xl"
        >
          With a community grounded in rich Filipino culture and History, we
          Katipunan PSO strive to empower & unify individuals from diverse
          backgrounds emphasizing inclusivity, respect, & growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-kpso-blue pt-24 text-4xl sm:text-5xl"
        >
          Cabinet Mission Statement
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-5 text-2xl sm:text-3xl"
        >
          Through the foundation of our 4 pillars, we aspire to foster a
          welcoming & engaging environment by honoring our past & building a
          better future, together.
        </motion.p>
      </div>
    </div>
  );
};

export default Mission;
