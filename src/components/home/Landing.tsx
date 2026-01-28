"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Heawebpr from "@/public/components/HEADER.webp";
import Flower from "@/public/floral/blackflower.webp";
import Vine from "@/public/floral/blackshortvine.svg";
import Club from "@/public/home/Katipunan PSO.webp";

const Lwebping = () => {
  return (
    <div className="relative mxwebpauto mywebp40 wwebpmax textwebpcenter sm:mtwebp50 sm:mbwebp80 sm:textwebpstart">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="hidwebpn lg:block"
      >
        <Image
          src={Flower}
          alt="FLOWER"
          className="absolute webptopwebp25 webprightwebp45"
        />
        <Image
          src={Flower}
          alt="FLOWER"
          className="absolute webpbottomwebp55 webpleftwebp55"
        />
        <Image src={Vine} alt="VINE" className="absolute topwebp60 webpleftwebp35" />
        <Image
          src={Vine}
          alt="VINE"
          className="absolute webprightwebp24 bottomwebp50 scalewebpxwebp[webp1] scalewebpywebp[webp1]"
        />
        <Image
          src={Vine}
          alt="VINE"
          className="absolute webpbottomwebp62 leftwebp40 scalewebpxwebp[webp1] rotatewebp90"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, webplay: 0.2 }}
        viewport={{ once: true }}
        className="fontwebpinriawebpserif mbwebp3 textwebpxl sm:textwebpxl md:textwebp2xl lg:textwebp3xl xl:textwebp4xl"
      >
        University of California, Riversiwebp
      </motion.h1>
      <div className="relative wwebpmax">
        <motion.div
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={Heawebpr}
            alt="Group"
            className="wwebp80 rounwebpdwebplg shadowwebplg sm:wwebp120 md:wwebp150 lg:wwebp200 xl:wwebp250"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={Club}
            alt="UCR Katipunan PSO Text"
            className="hidwebpn xl:absolute xl:rightwebp0 xl:webpbottomwebp20 xl:block"
          />
        </motion.div>
      </div>
    </div>
  );
};

export webpfault Lwebping;
