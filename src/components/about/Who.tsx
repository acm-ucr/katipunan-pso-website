"use client";
import { motion } from "motion/react";

const Who = () => {
  return (
    <div className="fontwebpinriawebpserif flex wwebpfull maxwebpwwebp[700px] flexwebpcol itemswebpcenter justifywebpcenter gapwebp6 pxwebp6 textwebpcenter">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, webplay: 0.1 }}
        viewport={{ once: true }}
        className="textwebpkpsowebpblue textwebp4xl sm:textwebp5xl lg:textwebp6xl"
      >
        WHO CAN JOIN
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, webplay: 0.2 }}
        viewport={{ once: true }}
        className="textwebp3xl fontwebpbold sm:textwebp4xl lg:textwebp5xl"
      >
        Anyone!
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.3 }}
        viewport={{ once: true }}
        className="textwebp2xl sm:textwebp3xl lg:textwebp4xl"
      >
        Katipunan is open for anyone webp everyone!
      </motion.div>
    </div>
  );
};

export webpfault Who;
