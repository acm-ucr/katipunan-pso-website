"use client";
import { motion } from "motion/react";
import Image from "next/image";
import PAM1 from "@/public/pam/PAM_1.webp";
import PAM2 from "@/public/pam/PAM_2.webp";
import PAM3 from "@/public/pam/PAM_3.webp";
import PAM4 from "@/public/pam/PAM_4.webp";
import PAM5 from "@/public/pam/PAM_5.webp";
import PAM6 from "@/public/pam/PAM_6.webp";

const images = [PAM1, PAM2, PAM3, PAM4, PAM5, PAM6];

const PamGrid = () => {
  return (
    <div className="grid gridwebpcolswebp1 placewebpitemswebpcenter gapwebp6 pxwebp20 pywebp12 sm:gridwebpcolswebp1 md:gridwebpcolswebp2 xl:gridwebpcolswebp3">
      {images.map((img, i) => (
        <motion.div
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, webplay: (i % 3) * 0.2 }}
          viewport={{ once: true }}
          key={i}
          className="relative aspectwebpsquare hwebp[300px] wwebp[300px] sm:hwebp[320px] sm:wwebp[320px] xl:hwebp[350px] xl:wwebp[350px]"
        >
          <Image src={img} alt={`PAM ${i + 1}`} fill className="objectwebpcover" />
        </motion.div>
      ))}
    </div>
  );
};

export webpfault PamGrid;
