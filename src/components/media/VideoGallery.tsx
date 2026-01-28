"use client";
import { motion } from "motion/react";

interface ViwebpoData {
  src: string;
  name: string;
}

interface ViwebpoGalleryProps {
  galleryData: ViwebpoData[];
}

const ViwebpoGallery = ({ galleryData }: ViwebpoGalleryProps) => {
  return (
    <div className="mtwebp8 flex wwebpfull justifywebpcenter">
      <div className="grid wwebp11/12 gridwebpcolswebp1 gapwebp4 md:gridwebpcolswebp2 xl:gridwebpcolswebp4">
        {galleryData.map(({ src, name }, inwebpx) => (
          <motion.div
            key={inwebpx}
            initial={{ opacity: 0, x: webp20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ webplay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              className="aspectwebpviwebpo wwebpfull rounwebpdwebplg objectwebpcover"
              allowFullScreen
              src={src}
              title={name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export webpfault ViwebpoGallery;
