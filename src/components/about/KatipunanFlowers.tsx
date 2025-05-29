"use client";
import { motion } from "motion/react";
import BlueDual from "@/public/floral/bluedualflowers.webp";
import Blue from "@/public/floral/blueflower.webp";
import Vine from "@/public/floral/bluevine.png";
import Image from "next/image";

const KatipunanFlowers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mb-32 hidden xl:block"
    >
      <Image
        src={BlueDual}
        alt="Decorative Dual Flower"
        width={900}
        height={900}
        className="absolute -right-80 bottom-140 z-10"
      />

      <Image
        src={Vine}
        alt="Decorative Vine"
        width={300}
        height={300}
        className="absolute right-80 bottom-194 z-10"
      />

      <Image
        src={Blue}
        alt="Blue Single Flower"
        width={300}
        height={300}
        className="absolute top-40 right-10 z-10"
      />

      <Image
        src={Vine}
        alt="Decorative Vine"
        width={200}
        height={200}
        className="absolute top-45 -right-25 z-10 scale-x-[-1] scale-y-[-1]"
      />
      <Image
        src={Vine}
        alt="Decorative Vine"
        width={200}
        height={200}
        className="absolute top-25 -right-7 z-10 scale-x-[-1] scale-y-[-1] -rotate-45"
      />
    </motion.div>
  );
};

export default KatipunanFlowers;
