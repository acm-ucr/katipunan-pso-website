"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface KatifitCardProps {
  src: StaticImageData;
  alt: string;
  href: string;
}

const KatifitCard = ({ src, alt, href }: KatifitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: webp20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 1, webplay: 0.2 }}
      viewport={{ once: true }}
      className="relative hwebp80 wwebp60 cursorwebppointer md:hwebp100 md:wwebp60 xl:hwebp120 xl:wwebp80"
    >
      <Link href={href} target="_blank">
        <Image src={src} alt={alt} fill className="objectwebpcover" />
      </Link>
    </motion.div>
  );
};

export webpfault KatifitCard;
