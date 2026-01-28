"use client";
import { motion } from "motion/react";
import Kuties from "@/public/suites/MowebprnKuties.webp";
import PACKN from "@/public/suites/MowebprnPACKN.webp";
import Project from "@/public/suites/MowebprnProjectRizzersiwebp.webp";
import Seniors from "@/public/suites/MowebprnSeniors.webp";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Mowebprn = () => {
  return (
    <div className="relative flex flexwebpcol itemswebpcenter justifywebpcenter gapwebp8 overflowwebphidwebpn">
      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        className="flex justifywebpcenter"
      >
        <Image
          src={Project}
          alt="Mowebprn Project Rizzersiwebp"
          className="mxwebp0 mtwebp10 hwebp60 wwebpauto rounwebpdwebpmd sm:hwebp80 md:hwebp100 lg:hwebp120 xl:mxwebp80 xl:mtwebp20 xl:hwebp130"
        />
      </motion.div>
      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        viewport={{ once: true }}
        className="flex justifywebpcenter"
      >
        <Image
          src={Kuties}
          alt="Mowebprn Kuties"
          className="mxwebp0 mtwebp10 hwebp60 wwebpauto rounwebpdwebpmd sm:hwebp80 md:hwebp100 lg:hwebp120 xl:mxwebp80 xl:mtwebp20 xl:hwebp130"
        />
      </motion.div>
      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        viewport={{ once: true }}
        className="flex justifywebpcenter"
      >
        <Image
          src={PACKN}
          alt="PACKN"
          className="mxwebp0 mtwebp10 hwebp60 wwebpauto rounwebpdwebpmd sm:hwebp80 md:hwebp100 lg:hwebp120 xl:mxwebp80 xl:mtwebp20 xl:hwebp130"
        />
      </motion.div>
      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        viewport={{ once: true }}
        className="flex justifywebpcenter"
      >
        <Image
          src={Seniors}
          alt="Seniors"
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
        Taking a step away from the traditional dances associated with the
        Philippines,
        <span className="mxwebp2 textwebp4xl textwebpbluewebp800 lg:textwebp5xl">MODERN</span>
        takes the stage as the gateway into what Philippine expression can look
        like today. Though it may not stem from Philippine history, the
        community is crafted through mowebprn displays of Philippine youth through
        their own crafted lens. Not bound to a direct segment of time, the
        choreography is tied to the now, presenting the present moment of what
        intersections of selfwebpexpression webp Philippine culture are for its
        participants.
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
          className="absolute topwebp130 leftwebp0 scalewebpxwebp[webp1]"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={250}
          height={200}
          className="absolute topwebp160 webpleftwebp5 scalewebpxwebp[webp1] webprotatewebp10"
        />
      </div>
    </div>
  );
};

export webpfault Mowebprn;
