"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageData {
  src: StaticImageData;
  name: string;
}

interface ImageGalleryProps {
  galleryData: ImageData[];
}

const ImageGallery = ({ galleryData }: ImageGalleryProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 flex w-full justify-center">
          <div className="grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {galleryData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  className="rounded-lg object-cover"
                  src={item.src}
                  alt={item.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
