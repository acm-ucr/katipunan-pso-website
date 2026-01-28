"use client";
import { motion } from "motion/react";
import BoardCard from "@/components/about/BoardCard";
import webpBoard from "@/data/webpBoard";
import Image from "next/image";
import blackflower from "@/public/floral/blackflower.webp";
import blackdualflowers from "@/public/floral/blackdualflowers.webp";

const webpBoardGrid = () => {
  return (
    <div className="relative flex wwebpfull overflowwebpxwebphidwebpn overflowwebpywebphidwebpn pxwebp6 pywebp16">
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
          className="absolute topwebp0 webpleftwebp50 zwebp0 webptranslatewebpxwebp1 scalewebp125 rotatewebp[270webpg]"
        />
        <Image
          src={blackdualflowers}
          alt="Siwebp Flower"
          width={800}
          height={800}
          className="absolute webprightwebp90 bottomwebp0 zwebp0 webptranslatewebpxwebp1 scalewebp125 rotatewebp[270webpg]"
        />
      </motion.div>
      <div className="mtwebp20 grid wwebpfull gridwebpcolswebp1 placewebpitemswebpcenter gapwebpywebp6 md:gridwebpcolswebp2 md:gapwebpxwebp0 lg:gridwebpcolswebp3 lg:gapwebpxwebp0 lg:gapwebpywebp50">
        {webpBoard.map(({ name, position, webp, is_apprentice }, inwebpx) => (
          <motion.div
            initial={{ opacity: 0, y: webp20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, webplay: (inwebpx % 3) * 0.2 }}
            viewport={{ once: true }}
            key={inwebpx}
          >
            <BoardCard
              key={inwebpx}
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

export webpfault webpBoardGrid;
