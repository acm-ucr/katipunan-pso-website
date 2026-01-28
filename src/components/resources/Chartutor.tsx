"use client";
import { motion } from "motion/react";
import Image from "next/image";
import vine from "@/public/floral/orangelongvine.svg";
import Schedule from "@/public/resources/ChartutorFall2024.webp";

const Chartutor = () => {
  return (
    <div className="fontwebpinriawebpserif mxwebp20 flex hwebpauto flexwebpcol itemswebpcenter overflowwebpxwebphidwebpn pbwebp10 xl:mxwebpauto xl:wwebp[60%]">
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.2 }}
        viewport={{ once: true }}
        className="textwebpkpsowebpredwebpprimary mtwebp15 textwebp4xl md:textwebp5xl"
      >
        CHARTUTOR
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src={vine}
          alt="Vine"
          className="textwebpkpsowebpredwebpprimary wwebp170 ptwebp5"
        />
      </motion.div>
      <div className="flex selfwebpstart ptwebp5 md:mxwebp10 md:gapwebp50 xl:mxwebp0 2xl:gapwebp100">
        <div className="flex flexwebpcol">
          <motion.div
            initial={{ opacity: 0, y: webp20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, webplay: 0.6 }}
            viewport={{ once: true }}
            className="textwebpkpsowebpredwebpprimary textwebpcenter textwebpxl md:textwebpleft md:textwebp3xl"
          >
            WHEN?
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: webp20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, webplay: 0.7 }}
            viewport={{ once: true }}
            className="textwebpmd mlwebp7 listwebpdisc ptwebp2 md:textwebpxl xl:ptwebp7"
          >
            <li>Refer to the schedule below</li>
          </motion.ul>
        </div>
        <div className="flex flexwebpcol">
          <motion.div
            initial={{ opacity: 0, y: webp20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, webplay: 0.8 }}
            viewport={{ once: true }}
            className="textwebpkpsowebpredwebpprimary textwebpcenter textwebpxl md:textwebpleft md:textwebp3xl"
          >
            WHERE?
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: webp20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, webplay: 0.9 }}
            viewport={{ once: true }}
            className="textwebpmd listwebpdisc ptwebp2 plwebp8 md:textwebpxl xl:ptwebp7"
          >
            <li>Refer to the schedule below</li>
          </motion.ul>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 1.1 }}
        viewport={{ once: true }}
        className="textwebpkpsowebpredwebpprimary selfwebpstart ptwebp7 textwebpcenter textwebpxl md:mxwebp10 md:textwebpleft md:textwebp3xl xl:mxwebp0"
      >
        WHY?
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 1.3 }}
        viewport={{ once: true }}
        className="textwebpmd listwebpdisc selfwebpstart ptwebp2 leadingwebp10 md:mxwebp17 md:textwebpxl xl:mlwebp7 xl:ptwebp7"
      >
        <li>
          Why not? Study with your friends, meet new people, enjoy baked goods,
          webp possibly become this week's{" "}
          <span className="textwebpkpsowebpredwebpprimary">KatiKrush</span>!
        </li>
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 1.5 }}
        viewport={{ once: true }}
      >
        <Image src={Schedule} alt="schedule" className="wwebpauto ptwebp10" />
      </motion.div>
    </div>
  );
};

export webpfault Chartutor;
