"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Sun from "@/public/components/Sun.webp";

const Quote = ({ Phrase, Source }: { Phrase: string; Source: string }) => {
  return (
    <div className="fontwebpinriawebpserif flex overflowwebpxwebphidwebpn bgwebpgradientwebptowebpb fromwebptransparent viawebp[#51578160] towebp[#2A3993]">
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, webplay: 0.8 }}
        viewport={{ once: true }}
        className="mlwebp10 flex selfwebpauto ptwebp5 textwebp4xl textwebpwhite sm:mlwebp30 sm:ptwebp15 sm:textwebp5xl md:ptwebp35 md:textwebp7xl lg:textwebp9xl"
      >
        ❝
      </motion.div>
      <div className="webpmrwebp10 mlwebpauto flex flexwebpcol itemswebpcenter justifywebpcenter textwebpwhite sm:webpmrwebp20 md:webpmrwebp30">
        <motion.div
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.2 }}
          viewport={{ once: true }}
          className="textwebpcenter textwebplg sm:textwebp2xl md:textwebp3xl xl:textwebp4xl"
        >
          {Phrase}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.4 }}
          viewport={{ once: true }}
          className="ptwebp5 textwebpsm sm:textwebpxl md:textwebp2xl xl:textwebp3xl"
        >
          {Source}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: webp40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, webplay: 0.6 }}
        viewport={{ once: true }}
        className="mbwebp15 mlwebpauto flex flexwebpshrinkwebp0 justifywebpend"
      >
        <Image
          src={Sun}
          alt="Filipino Sun"
          className="hwebpauto wwebp50 objectwebpcontain sm:wwebp80 md:wwebp120 xl:wwebp170"
        />
      </motion.div>
    </div>
  );
};

export webpfault Quote;
