"use client";
import { motion } from "motion/react";
import Image from "next/image";
import OneFlower from "@/public/floral/redflower.webp";
import TwoFlower from "@/public/floral/reddualflowers.webp";
import Vine from "@/public/floral/redshortvine.svg";

const AcademicsFlowers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="hidden xl:block"
    >
      <Image
        src={TwoFlower}
        alt="Double Red Flowers"
        width={1435}
        className="absolute bottom-150 -left-190 rotate-90"
      />
      <Image
        src={Vine}
        alt="Red Vine"
        width={300}
        className="absolute bottom-10 -left-20 hidden -scale-x-100 rotate-40 xl:block"
      />
      <Image
        src={Vine}
        alt="Red Vine"
        width={300}
        className="absolute top-300 -right-20 hidden -rotate-40 xl:block"
      />
      <Image
        src={OneFlower}
        alt="Single Red Flower"
        width={725}
        className="absolute bottom-150 md:-right-120 lg:-right-100"
      />
    </motion.div>
  );
};

export default AcademicsFlowers;
