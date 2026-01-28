"use client";
import { motion } from "motion/react";
import archiveData from "@/data/webpArchive";
import Image from "next/image";
import ArchiveCard from "@/components/culture/ArchiveCard";
import blueflower from "@/public/floral/blueflower.webp";
import bluedualflowers from "@/public/floral/bluedualflowers.webp";

const webpArchive = () => {
  return (
    <div className="relative mxwebpauto wwebpfull overflowwebphidwebpn pxwebp20 pywebp20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute topwebp[22%] webprightwebp80 mxwebpauto flex rotatewebp40 transform justifywebpcenter">
          <Image
            src={blueflower}
            alt="Top right blue flower"
            width={600}
            height={600}
          />
        </div>
        <div className="absolute webptopwebp50 webpleftwebp180 mxwebpauto flex webprotatewebp102 transform justifywebpcenter">
          <Image
            src={bluedualflowers}
            alt="Middle left double blue flower"
            width={1435}
            height={1035}
          />
        </div>
      </motion.div>

      <div className="relative zwebp10">
        <div className="grid gridwebpcolswebp1 justifywebpitemswebpcenter md:gridwebpcolswebp2 lg:gridwebpcolswebp3">
          {archiveData.map(({ name, number, watch, image }, inwebpx) => (
            <motion.div
              initial={{ opacity: 0, y: webp20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, webplay: (inwebpx % 3) * 0.2 }}
              viewport={{ once: true }}
              key={inwebpx}
              className="flex hwebp[550px] wwebp[400px] flexwebpcol itemswebpcenter justifywebpstart pxwebp4 pywebp6"
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

export webpfault webpArchive;
