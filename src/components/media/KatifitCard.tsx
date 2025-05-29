"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type KatifitCardProps = {
  src: StaticImageData;
  alt: string;
  href: string;
};

const KatifitCard = ({ src, alt, href }: KatifitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Link href={href} target="_blank">
        <div className="relative h-80 w-60 cursor-pointer md:h-100 md:w-60 xl:h-120 xl:w-80">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      </Link>
    </motion.div>
  );
};

export default KatifitCard;
