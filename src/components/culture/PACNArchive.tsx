"use client";
import { motion } from "motion/react";
import archiveData from "@/data/PACNArchive";
import Image from "next/image";
import ArchiveCard from "@/components/culture/ArchiveCard";
import blueflower from "@/public/floral/blueflower.webp";
import bluedualflowers from "@/public/floral/bluedualflowers.webp";

const PACNArchive = () => {
  return (
    <div className="relative mx-auto w-full overflow-hidden px-20 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute top-[22%] -right-80 mx-auto flex rotate-40 transform justify-center">
          <Image
            src={blueflower}
            alt="Top right blue flower"
            width={600}
            height={600}
          />
        </div>
        <div className="absolute -top-50 -left-180 mx-auto flex -rotate-102 transform justify-center">
          <Image
            src={bluedualflowers}
            alt="Middle left double blue flower"
            width={1435}
            height={1035}
          />
        </div>
      </motion.div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {archiveData.map(({ name, number, watch, image }, index) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index % 3) * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className="flex h-[550px] w-[400px] flex-col items-center justify-start px-4 py-6"
            >
              <ArchiveCard
                name={name}
                number={number}
                watch={watch}
                image={image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PACNArchive;
