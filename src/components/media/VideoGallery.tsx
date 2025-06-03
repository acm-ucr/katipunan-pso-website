"use client";
import { motion } from "motion/react";

interface VideoData {
  src: string;
  name: string;
}

interface VideoGalleryProps {
  galleryData: VideoData[];
}

const VideoGallery = ({ galleryData }: VideoGalleryProps) => {
  return (
    <div className="mt-8 flex w-full justify-center">
      <div className="grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {galleryData.map(({ src, name }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              className="aspect-video w-full rounded-lg object-cover"
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

export default VideoGallery;
