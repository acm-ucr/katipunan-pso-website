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
    <div className="mt-8 flex w-full justify-center">
      <div className="grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {galleryData.map(({ src, name }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="rounded-lg object-cover" src={src} alt={name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
