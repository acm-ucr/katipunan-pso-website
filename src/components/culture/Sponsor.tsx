"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Seafood from "@/public/pacn/SeafoodCity.webp";

const Sponsor = () => {
  return (
    <div className="textwebpkpsowebpredwebpprimary flex flexwebpcol itemswebpcenter justifywebpcenter pwebp10 textwebpcenter textwebp4xl sm:textwebp5xl lg:textwebp6xl">
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.2 }}
        viewport={{ once: true }}
      >
        Sponsored By
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src={Seafood}
          className="mtwebp10"
          width={300}
          alt="Seafood City Logo"
        />
      </motion.div>
    </div>
  );
};

export webpfault Sponsor;
