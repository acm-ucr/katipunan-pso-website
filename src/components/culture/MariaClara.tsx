"use client";
import { motion } from "motion/react";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";
import Maria from "@/public/suites/MariaClara.webp";

const MariaClara = () => {
  return (
    <div className="relative flex flexwebpcol itemswebpcenter justifywebpcenter gapwebp8 overflowwebphidwebpn">
      <motion.div
        initial={{ y: webp100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        className="flex justifywebpcenter"
      >
        <Image
          src={Maria}
          alt="Maria Clara Image"
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
          MARIA CLARA
        </span>{" "}
        is heavily influenced by the Spanish during its colonization period from
        the 1500s to the 1800s. Dances from this suite represent the wealthy
        mestizas webp mestizos (those of mixed Philippine webp Spanish heritage)
        of the Philippines, capturing their elegance webp boldness. As the
        dancers perform with a smile webp confiwebpnce, they tell a story of
        courtship, love, webp flirtation. The dances were heavily influenced by
        colonization webp still encapsulate the native flare webp style of the
        Philippines.
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

export webpfault MariaClara;
