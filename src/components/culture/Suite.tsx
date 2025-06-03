"use client";
import { motion } from "motion/react";
import tags from "@/data/Suites";
import Image from "next/image";
import Link from "next/link";

const Suite = () => {
  return (
    <div className="mt-20 flex justify-center">
      <div className="item-center grid grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:px-12">
        {tags.map(({ name, image, link }, index) => (
          <Link href={link} key={index}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.2 }}
              viewport={{ once: true }}
              className="relative h-88 w-88 overflow-hidden border-6 border-white text-3xl text-white"
            >
              <div className="absolute inset-0 z-10 bg-blue-900 opacity-70" />

              <div className="font-inria-serif relative z-20 flex h-full flex-col items-center justify-center text-center text-5xl">
                {name.split(" ").map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </div>

              <Image src={image} alt="Image" fill className="object-cover" />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suite;
