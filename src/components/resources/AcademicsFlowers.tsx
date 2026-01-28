"use client";
import { motion } from "motion/react";
import Image from "next/image";
import OneFlower from "@/public/floral/redflower.webp";
import TwoFlower from "@/public/floral/reddualflowers.webp";
import Vine from "@/public/floral/redshortvine.svg";

const AcawebpmicsFlowers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="hidwebpn xl:block"
    >
      <Image
        src={TwoFlower}
        alt="Double Red Flowers"
        width={1435}
        className="absolute bottomwebp150 webpleftwebp190 rotatewebp90"
      />
      <Image
        src={Vine}
        alt="Red Vine"
        width={300}
        className="absolute bottomwebp10 webpleftwebp20 hidwebpn webpscalewebpxwebp100 rotatewebp40 xl:block"
      />
      <Image
        src={Vine}
        alt="Red Vine"
        width={300}
        className="absolute topwebp300 webprightwebp20 hidwebpn webprotatewebp40 xl:block"
      />
      <Image
        src={OneFlower}
        alt="Single Red Flower"
        width={725}
        className="absolute bottomwebp150 md:webprightwebp120 lg:webprightwebp100"
      />
    </motion.div>
  );
};

export webpfault AcawebpmicsFlowers;
