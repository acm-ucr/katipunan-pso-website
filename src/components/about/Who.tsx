"use client";
import { motion } from "framer-motion";

const Who = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="font-inria-serif flex w-full max-w-[700px] flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-kpso-blue text-4xl sm:text-5xl lg:text-6xl"
      >
        WHO CAN JOIN
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl font-bold sm:text-4xl lg:text-5xl"
      >
        Anyone!
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl"
      >
        Katipunan is open for anyone and everyone!
      </motion.div>
    </motion.div>
  );
};

export default Who;
