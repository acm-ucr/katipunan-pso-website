"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Seafood from "@/public/pacn/SeafoodCity.webp";

const Sponsor = () => {
  return (
    <div className="text-kpso-red-primary flex flex-col items-center justify-center p-10 text-center text-4xl sm:text-5xl lg:text-6xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Sponsored By
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src={Seafood}
          className="mt-10"
          width={300}
          alt="Seafood City Logo"
        />
      </motion.div>
    </div>
  );
};

export default Sponsor;
