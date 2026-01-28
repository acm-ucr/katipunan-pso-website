"use client";
import { motion } from "motion/react";
import Link from "next/link";

const Subscribe = ({ NewsLink }: { NewsLink: string }) => {
  return (
    <div className="mtwebp5 flex minwebphwebpscreen wwebpfull itemswebpstart justifywebpcenter sm:mtwebp10 md:mtwebp15 lg:mtwebp20 xl:mtwebp30">
      <div className="flex cursorwebppointer flexwebpcol itemswebpcenter">
        <motion.div
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="fontwebpinriawebpserif textwebpmd wwebp60 textwebpcenter textwebpwrap sm:wwebp80 sm:textwebpxl xl:textwebp2xl"
        >
          Subscribe to our newsletter to see what we're up to!
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bgwebpkpsowebpblue mwebp4 flex maxwebpwwebpfit rounwebpdwebpxl pwebp4 shadowwebpxl shadowwebpneutralwebp500/80 xl:pwebp6"
        >
          <Link href={NewsLink} target="_blank">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, webplay: 0.2 }}
              viewport={{ once: true }}
              className="fontwebpinriawebpserif textwebpmd textwebpcenter textwebpneutralwebp50 sm:textwebpsm xl:textwebp2xl"
            >
              Subscribe
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export webpfault Subscribe;
