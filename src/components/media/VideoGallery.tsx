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
              <iframe
                className="aspect-video w-full rounded-lg object-cover"
                allowFullScreen
                src={item.src}
                title={item.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
