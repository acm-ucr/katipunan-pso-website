"use client";
import { motion } from "motion/react";
import BoardCard from "@/components/about/BoardCard";
import PACNBoard from "@/data/PACNBoard";
import Image from "next/image";
import blackflower from "@/public/floral/blackflower.webp";
import blackdualflowers from "@/public/floral/blackdualflowers.webp";

const PACNBoardGrid = () => {
  return (
    <div className="relative flex w-full overflow-x-hidden overflow-y-hidden px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={blackflower}
          alt="Decorative Flow"
          width={500}
          height={500}
          className="absolute top-0 -left-50 z-0 -translate-x-1 scale-125 rotate-[270deg]"
        />
        <Image
          src={blackdualflowers}
          alt="Side Flower"
          width={800}
          height={800}
          className="absolute -right-90 bottom-0 z-0 -translate-x-1 scale-125 rotate-[270deg]"
        />
      </motion.div>
      <div className="mt-20 grid w-full grid-cols-1 place-items-center gap-y-6 md:grid-cols-2 md:gap-x-0 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-50">
        {PACNBoard.map(({ name, position, webp, is_apprentice }, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (index % 3) * 0.2 }}
            viewport={{ once: true }}
            key={index}
          >
            <BoardCard
              key={index}
              position={position}
              name={name}
              webp={webp}
              is_apprentice={is_apprentice}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PACNBoardGrid;
