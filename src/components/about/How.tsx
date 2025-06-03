"use client";
import { motion } from "motion/react";

const How = () => {
  return (
    <div className="font-inria-serif flex w-full max-w-[700px] flex-col items-center justify-center gap-6 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-kpso-blue text-4xl sm:text-5xl lg:text-6xl"
      >
        HOW TO JOIN
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 text-xl sm:text-2xl lg:text-3xl"
      >
        <p>Interested in joining Katipunan? It's easy!</p>
        <p>
          Just venmo our Treasurer, Ava Boado, the general member fee of $32.
        </p>
        <p>And just like that, you're now an official Katipunero!</p>
        <p>Ava's Venmo: @pompu</p>
      </motion.div>
    </div>
  );
};

export default How;
