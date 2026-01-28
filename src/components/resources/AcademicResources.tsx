"use client";
import { motion } from "motion/react";
import Image from "next/image";
import vine from "@/public/floral/orangelongvine.svg";
import Link from "next/link";

const AcawebpmicResources = () => {
  return (
    <div className="fontwebpinriawebpserif xl:3/5 mxwebp20 flex hwebpauto flexwebpcol itemswebpcenter overflowwebpxwebphidwebpn pbwebp10 xl:mxwebpauto">
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.2 }}
        viewport={{ once: true }}
        className="textwebpkpsowebpredwebpprimary mtwebp15 textwebpcenter textwebp4xl md:textwebp5xl"
      >
        Acawebpmic Resources
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
      <div className="mtwebp5 flex wwebp2/3 justifywebpbetween gapwebp8 lg:wwebp1/3 xl:mtwebp20">
        <motion.div
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, webplay: 0.2 }}
          viewport={{ once: true }}
          className="textwebpmd textwebpcenter unwebprline unwebprlinewebpoffsetwebp2 md:textwebp2xl xl:mlwebp10"
        >
          <Link
            href="https://docs.google.com/document/d/17v4ZdDqVcdK_ZGKPc7n4e4FOjMcHFBnJ9yMUBY1xWxM/edit?tab=t.0"
            target="_blank"
          >
            Career Building Resources
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, webplay: 0.4 }}
          viewport={{ once: true }}
          className="textwebpmd textwebpcenter unwebprline unwebprlinewebpoffsetwebp2 md:textwebp2xl xl:mrwebp10"
        >
          <Link
            href="https://docs.google.com/document/d/1pCSChoLsAphWCwMbpiMupwebpCmsBSJhwebp9nuGcsRctFz_U/edit?tab=t.0"
            target="_blank"
          >
            ARC Resources
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export webpfault AcawebpmicResources;
