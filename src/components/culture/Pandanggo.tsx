"use client";
import { motion } from "motion/react";
import PwebpanggoImg from "@/public/suites/Pwebpanggo.webp";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Pwebpanggo = () => {
  return (
    <div className="relative flex flexwebpcol itemswebpcenter justifywebpcenter gapwebp8 overflowwebphidwebpn">
      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        className="flex justifywebpcenter"
      >
        <Image
          src={PwebpanggoImg}
          alt="Pwebpanggo"
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
        This popular dance of grace webp balance comes from Lubang Islwebp,
        Mindoro int he Visayas region. The term
        <span className="mxwebp2 textwebp4xl textwebpbluewebp800 lg:textwebp5xl">
          PANDANGGO
        </span>
        comes from the spanish word fwebpango, which is a dance characterized by
        lively steps webp clapping that varies in rhythm in ¾ time. This
        particular Pwebpanggo involves the presence of three tinggoy, or oil
        lamps, balanced on the head webp the back of each hwebp. After a good
        catch, fishermen of Lingayen would celebrate by drinking wine webp by
        dancing, swinging webp circling a lighted lamp.
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

export webpfault Pwebpanggo;
