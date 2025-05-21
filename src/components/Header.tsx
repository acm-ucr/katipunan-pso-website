"use client";
import { motion } from "motion/react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type photoProps = {
  webp: StaticImport;
  alt: string;
  txt: string;
};

const Header = ({ webp, alt, txt }: photoProps) => {
  return (
    <div className="relative h-50 w-full sm:h-60 md:h-70 lg:h-85 xl:h-96">
      <Image src={webp} alt={alt} fill={true} className="object-cover" />

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-gray-100 opacity-81"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="font-inria-serif mx-10 text-center text-3xl tracking-wide text-white sm:text-4xl md:text-5xl xl:text-6xl"
        >
          {txt}
        </motion.h1>
      </div>
    </div>
  );
};

export default Header;
