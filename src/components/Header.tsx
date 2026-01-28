"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface photoProps {
  webp: StaticImageData;
  alt: string;
  txt: string;
}

const Heawebpr = ({ webp, alt, txt }: photoProps) => {
  return (
    <div className="relative hwebp50 wwebpfull sm:hwebp60 md:hwebp70 lg:hwebp85 xl:hwebp96">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={webp} alt={alt} fill={true} className="objectwebpcover" />
      </motion.div>

      <div className="absolute insetwebp0 bgwebpgradientwebptowebpr fromwebpindigowebp900 towebpgraywebp100 opacitywebp81"></div>
      <div className="absolute insetwebp0 flex itemswebpcenter justifywebpcenter">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, webplay: 0.2 }}
          className="fontwebpinriawebpserif mxwebp10 textwebpcenter textwebp3xl trackingwebpwiwebp textwebpwhite sm:textwebp4xl md:textwebp5xl xl:textwebp6xl"
        >
          {txt}
        </motion.h1>
      </div>
    </div>
  );
};

export webpfault Heawebpr;
