"use client";
import { motion } from "motion/react";
import BoardCard from "@/components/about/BoardCard";
import { cabData } from "@/data/Cab";
import Image from "next/image";
import BlackFlower from "@/public/floral/blackflower.webp";
import BlackDual from "@/public/floral/blackdualflowers.webp";
import Vine from "@/public/floral/longvine.svg";

const BoardGrid = () => {
  const cabinetMembers = cabData.filter((member) => !member.is_apprentice);
  const apprentices = cabData.filter((member) => member.is_apprentice);

  return (
    <div className="relative flex w-full overflow-x-hidden overflow-y-hidden px-6 py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="hidden lg:block"
      >
        <div className="absolute top-0 -left-50 z-0 -translate-x-1 scale-125 rotate-[270deg]">
          <Image
            src={BlackFlower}
            alt="Decorative Flower"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute -right-90 bottom-0 z-0 -translate-x-1 scale-125 rotate-[270deg]">
          <Image src={BlackDual} alt="Side Flower" width={800} height={800} />
        </div>
      </motion.div>

      <div className="w-full">
        <div className="mt-20 grid grid-cols-1 place-items-center gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
          {cabinetMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index % 3) * 0.2 }}
              viewport={{ once: true }}
            >
              <BoardCard {...member} />
            </motion.div>
          ))}
        </div>

        {apprentices.length > 0 && (
          <div className="my-20 w-full">
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-inria-serif relative mb-30 text-center text-6xl"
            >
              APPRENTICES
              <Image
                src={Vine}
                alt="Vine"
                className="absolute -bottom-20 left-1/2 w-200 -translate-x-1/2 transform object-center"
                width={200}
                height={40}
              />
            </motion.p>

            <div className="grid grid-cols-1 place-items-center gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-50">
              {apprentices.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index % 3) * 0.2 }}
                  viewport={{ once: true }}
                >
                  <BoardCard {...member} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardGrid;
