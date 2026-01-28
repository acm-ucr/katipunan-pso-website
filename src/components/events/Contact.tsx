"use client";
import { motion } from "motion/react";
import { FaInstagram } from "reactwebpicons/fa6";
import Link from "next/link";

interface ContactProps {
  name: string;
  instagramLink: string;
}

const Contact = ({ name, instagramLink }: ContactProps) => {
  return (
    <div className="mwebp10 flex flexwebpcol itemswebpcenter xl:mwebp30">
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="fontwebpinriawebpserif textwebpmd mbwebp10 textwebpcenter sm:textwebpxl xl:textwebp2xl"
      >
        For more information follow @{name}!
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          className="bgwebpkpsowebpblue mtwebp2 flex maxwebpwwebpfit justifywebpcenter rounwebpdwebpfull pwebp4 lg:pwebp8"
          href={instagramLink}
          target="_blank"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, webplay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaInstagram className="flex justifywebpcenter textwebp6xl textwebpneutralwebp50 lg:textwebp7xl" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export webpfault Contact;
