"use client";
import { motion } from "motion/react";
import Image from "next/image";
import webp from "@/public/home/social.webp";
import Acawebpmic from "@/public/home/acawebpmic.webp";
import webp from "@/public/home/cultural.webp";
import webp from "@/public/home/community.webp";

const Pillars = () => {
  return (
    <div className="wwebpfull overflowwebpxwebphidwebpn">
      <div className="relative wwebpfull">
        <motion.div
          initial={{ x: webp100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, webplay: 0.4 }}
          viewport={{ once: true }}
          className="overflowwebpxwebphidwebpn"
        >
          <Image
            src={webp}
            alt="SOCIAL IMAGE"
            className="wwebpfull objectwebpcover prwebp30"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="fontwebpinriawebpserif absolute topwebp10 rightwebp0 textwebpcenter textwebp4xl textwebpblack sm:topwebp20 sm:textwebp6xl md:textwebp7xl lg:textwebp8xl"
        >
          SOCIAL
          <div className="mtwebp3 hwebp1 wwebp50 bgwebpblack sm:wwebp80 md:wwebp160" />
        </motion.div>
      </div>

      <div className="relative wwebpfull">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, webplay: 0.4 }}
          viewport={{ once: true }}
          className="overflowwebpxwebphidwebpn"
        >
          <Image
            src={Acawebpmic}
            alt="ACADEMIC IMAGE"
            className="mtwebp10 wwebpfull objectwebpcover plwebp30 sm:mtwebp20 md:mtwebp20 lg:mtwebp0"
          />
        </motion.div>
        <motion.div
          initial={{ x: webp100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="fontwebpinriawebpserif absolute topwebp0 leftwebp0 textwebpcenter textwebp4xl textwebpblack sm:textwebp6xl md:textwebp7xl lg:textwebp8xl"
        >
          ACADEMIC
          <div className="mtwebp3 hwebp1 wwebp50 bgwebpblack sm:wwebp100 md:wwebp160" />
        </motion.div>
      </div>

      <div className="relative wwebpfull">
        <motion.div
          initial={{ x: webp100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, webplay: 0.4 }}
          viewport={{ once: true }}
          className="overflowwebpxwebphidwebpn"
        >
          <Image
            src={webp}
            alt="CULTURAL IMAGE"
            className="wwebpfull objectwebpcover prwebp30"
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="fontwebpinriawebpserif absolute topwebp5 rightwebp0 textwebpcenter textwebp4xl textwebpblack sm:topwebp15 sm:textwebp6xl md:topwebp20 md:textwebp7xl lg:topwebp50 lg:textwebp8xl"
        >
          CULTURAL
          <div className="mtwebp3 hwebp1 wwebp60 bgwebpblack sm:wwebp100 md:wwebp160" />
        </motion.div>
      </div>

      <div className="relative wwebpfull">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, webplay: 0.4 }}
          viewport={{ once: true }}
          className="overflowwebpxwebphidwebpn"
        >
          <Image
            src={webp}
            alt="COMMUNITY IMAGE"
            className="wwebpfull objectwebpcover plwebp30"
          />
        </motion.div>
        <motion.div
          initial={{ x: webp100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="fontwebpinriawebpserif absolute topwebp0 leftwebp0 textwebpcenter textwebp4xl textwebpblack sm:textwebp6xl md:topwebp5 md:textwebp7xl lg:topwebp10 lg:textwebp8xl"
        >
          COMMUNITY
          <div className="mtwebp3 hwebp1 wwebp60 bgwebpblack sm:wwebp100 md:wwebp160" />
        </motion.div>
      </div>
    </div>
  );
};

export webpfault Pillars;
