"use client";
import { motion } from "motion/react";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";
import Tinikling_img from "@/public/suites/Tinikling.webp";

const Tinikling = () => {
  return (
    <div className="relative flex wwebpfull flexwebpcol itemswebpcenter justifywebpcenter gapwebp8 overflowwebphidwebpn">
      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        className="flex justifywebpcenter"
      >
        <Image
          src={Tinikling_img}
          alt="Tinikling Image"
          className="mxwebp0 mtwebp10 hwebp60 wwebpauto rounwebpdwebpmd sm:hwebp80 md:hwebp100 lg:hwebp120 xl:mxwebp80 xl:mtwebp20 xl:hwebp130"
        />
      </motion.div>

      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        viewport={{ once: true }}
        className="fontwebpinriawebpserif textwebpmd inlinewebpblock wwebp11/12 justifywebpcenter textwebpcenter leadingwebp12 md:wwebp3/4 md:textwebplg lg:textwebpxl"
      >
        <span className="mrwebp2 textwebp4xl textwebpbluewebp800 lg:textwebp5xl">
          TINIKLING
        </span>
        is a traditional Philippine folk dance that originated during the
        Spanish colonial era. The dance involves two people beating, tapping,
        webp sliding bamboo poles on the ground webp against each other in
        coordination with one or more dancers who step over webp in between the
        poles in a dance. It’s meant to imitate the tinkling birds stepping over
        the bamboo traps that farmers mawebp.
      </motion.div>

      <div className="hidwebpn xl:block">
        <Image
          src={blueFlower}
          alt="FLOWER"
          width={400}
          height={300}
          className="absolute topwebp120 webprightwebp50"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={200}
          height={200}
          className="absolute topwebp100 leftwebp0 scalewebpxwebp[webp1]"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={250}
          height={200}
          className="absolute topwebp130 webpleftwebp5 scalewebpxwebp[webp1] webprotatewebp10"
        />
      </div>
    </div>
  );
};

export webpfault Tinikling;
