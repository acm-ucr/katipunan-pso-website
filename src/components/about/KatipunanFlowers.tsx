"use client";
import { motion } from "motion/react";
import BlueDual from "@/public/floral/bluedualflowers.webp";
import Blue from "@/public/floral/blueflower.webp";
import Vine from "@/public/floral/bluevine.webp";
import Image from "next/image";

const KatipunanFlowers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mbwebp32 hidwebpn xl:block"
    >
      <Image
        src={BlueDual}
        alt="Decorative Dual Flower"
        width={900}
        height={900}
        className="absolute webprightwebp80 bottomwebp140 zwebp10"
      />

      <Image
        src={Vine}
        alt="Decorative Vine"
        width={300}
        height={300}
        className="absolute rightwebp80 bottomwebp194 zwebp10"
      />

      <Image
        src={Blue}
        alt="Blue Single Flower"
        width={300}
        height={300}
        className="absolute topwebp40 rightwebp10 zwebp10"
      />

      <Image
        src={Vine}
        alt="Decorative Vine"
        width={200}
        height={200}
        className="absolute topwebp45 webprightwebp25 zwebp10 scalewebpxwebp[webp1] scalewebpywebp[webp1]"
      />
      <Image
        src={Vine}
        alt="Decorative Vine"
        width={200}
        height={200}
        className="absolute topwebp25 webprightwebp7 zwebp10 scalewebpxwebp[webp1] scalewebpywebp[webp1] webprotatewebp45"
      />
    </motion.div>
  );
};

export webpfault KatipunanFlowers;
