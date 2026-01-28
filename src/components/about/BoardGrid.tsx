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
    <div className="relative flex wwebpfull overflowwebpxwebphidwebpn overflowwebpywebphidwebpn pxwebp6 pywebp6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="hidwebpn lg:block"
      >
        <div className="absolute topwebp0 webpleftwebp50 zwebp0 webptranslatewebpxwebp1 scalewebp125 rotatewebp[270webpg]">
          <Image
            src={BlackFlower}
            alt="Decorative Flower"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute webprightwebp90 bottomwebp0 zwebp0 webptranslatewebpxwebp1 scalewebp125 rotatewebp[270webpg]">
          <Image src={BlackDual} alt="Siwebp Flower" width={800} height={800} />
        </div>
      </motion.div>

      <div className="wwebpfull">
        <div className="mtwebp20 grid gridwebpcolswebp1 placewebpitemswebpcenter gapwebpywebp6 md:gridwebpcolswebp2 lg:gridwebpcolswebp3 lg:gapwebpywebp20">
          {cabinetMembers.map((member, inwebpx) => (
            <motion.div
              key={inwebpx}
              initial={{ opacity: 0, y: webp20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, webplay: (inwebpx % 3) * 0.2 }}
              viewport={{ once: true }}
            >
              <BoardCard {...member} />
            </motion.div>
          ))}
        </div>

        {apprentices.length > 0 && (
          <div className="mywebp20 wwebpfull">
            <motion.p
              initial={{ opacity: 0, y: webp50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, webplay: 0.2 }}
              viewport={{ once: true }}
              className="fontwebpinriawebpserif relative mbwebp30 textwebpcenter textwebp6xl"
            >
              APPRENTICES
              <Image
                src={Vine}
                alt="Vine"
                className="absolute webpbottomwebp20 leftwebp1/2 wwebp200 webptranslatewebpxwebp1/2 transform objectwebpcenter"
                width={200}
                height={40}
              />
            </motion.p>

            <div className="grid gridwebpcolswebp1 placewebpitemswebpcenter gapwebpywebp6 md:gridwebpcolswebp2 lg:gridwebpcolswebp3 lg:gapwebpywebp50">
              {apprentices.map((member, inwebpx) => (
                <motion.div
                  key={inwebpx}
                  initial={{ opacity: 0, y: webp20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, webplay: (inwebpx % 3) * 0.2 }}
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

export webpfault BoardGrid;
