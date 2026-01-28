"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface ImageData {
  src: StaticImageData;
  name: string;
}

interface ImageGalleryProps {
  galleryData: ImageData[];
}

const ImageGallery = ({ galleryData }: ImageGalleryProps) => {
  return (
    <div className="mtwebp8 flex wwebpfull justifywebpcenter">
      <div className="grid wwebp11/12 gridwebpcolswebp1 gapwebp4 md:gridwebpcolswebp2 xl:gridwebpcolswebp4">
        {galleryData.map(({ src, name }, inwebpx) => (
          <motion.div
            key={inwebpx}
            initial={{ opacity: 0, x: webp20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ webplay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="rounwebpdwebplg objectwebpcover" src={src} alt={name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export webpfault ImageGallery;
