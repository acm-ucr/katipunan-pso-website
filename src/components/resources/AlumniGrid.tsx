"use client";
import { motion } from "motion/react";
import alumniData from "@/data/Alumni";
import Image from "next/image";
import AlumniCard from "@/components/resources/AlumniCard";

const AlumniGrid = () => {
  return (
    <div className="relative mx-auto w-full overflow-hidden px-20 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          className="absolute top-[22%] -right-80 rotate-40"
          src="/floral/blueflower.webp"
          alt="Top right blue flower"
          width={600}
          height={600}
        />
        <Image
          className="absolute top-[40%] -left-180 -rotate-102"
          src="/floral/bluedualflowers.webp"
          alt="Middle left double blue flower"
          width={1435}
          height={1035}
        />
        <Image
          className="absolute top-[90%] -right-1 -rotate-3"
          src="/floral/blueshortvine.svg"
          alt="bottom right blue vine"
          width={143}
          height={336}
        />
      </motion.div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
          {alumniData.map(
            ({ fullName, gradClass, readMoreText, image }, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.2 }}
                viewport={{ once: true }}
                key={index}
                className="flex h-[550px] w-[400px] flex-col items-center justify-start px-4 py-6"
              >
                <AlumniCard
                  fullName={fullName}
                  gradClass={gradClass}
                  readMoreText={readMoreText}
                  image={image}
                />
              </motion.div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniGrid;
