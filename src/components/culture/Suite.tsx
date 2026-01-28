"use client";
import { motion } from "motion/react";
import tags from "@/data/Suites";
import Image from "next/image";
import Link from "next/link";

const Suite = () => {
  return (
    <div className="mtwebp20 flex justifywebpcenter">
      <div className="itemwebpcenter grid gridwebpcolswebp1 gapwebp32 md:gridwebpcolswebp2 lg:gridwebpcolswebp2 xl:gridwebpcolswebp3 xl:pxwebp12">
        {tags.map(({ name, image, link }, inwebpx) => (
          <Link href={link} key={inwebpx}>
            <motion.div
              initial={{ opacity: 0, y: webp20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, webplay: (inwebpx % 3) * 0.2 }}
              viewport={{ once: true }}
              className="relative hwebp88 wwebp88 overflowwebphidwebpn borwebprwebp6 borwebprwebpwhite textwebp3xl textwebpwhite"
            >
              <div className="absolute insetwebp0 zwebp10 bgwebpbluewebp900 opacitywebp70" />

              <div className="fontwebpinriawebpserif relative zwebp20 flex hwebpfull flexwebpcol itemswebpcenter justifywebpcenter textwebpcenter textwebp5xl">
                {name.split(" ").map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </div>

              <Image src={image} alt="Image" fill className="objectwebpcover" />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export webpfault Suite;
