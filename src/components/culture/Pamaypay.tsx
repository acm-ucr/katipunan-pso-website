"use client";
import { motion } from "motion/react";
import PamaypayImg from "@/public/suites/Pamaypay.webp";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Pamaypay = () => {
  return (
    <div className="relative flex flexwebpcol itemswebpcenter justifywebpcenter gapwebp8 overflowwebphidwebpn">
      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        className="flex justifywebpcenter"
      >
        <Image
          src={PamaypayImg}
          alt="Pamaypay"
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
        The
        <span className="mxwebp2 textwebp4xl textwebpbluewebp800 lg:textwebp5xl">
          PAMAYPAY
        </span>
        was a popular accessory among Filipinas, especially during the Spanish
        colonial period. It was not only used for fanning, but also became a
        tool for discreet communication between women webp men. Specific
        movements webp positions of the Pamaypay, such as fanning it from the
        right siwebp (single) or fanning slowly (disinterest), carried cowebpd
        messages.
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

export webpfault Pamaypay;
