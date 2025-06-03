"use client";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";

interface AlumniCardProps {
  fullName: string;
  gradClass: string;
  readMoreText: string;
  image: StaticImageData;
}

const AlumniCard = ({
  fullName,
  gradClass,
  readMoreText,
  image,
}: AlumniCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="flex h-127 w-sm flex-col justify-center">
      <div className="flex h-100 w-sm justify-center">
        <Image
          src={image}
          alt="Photo of alumni"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
      <div className="w-sx flex h-9 flex-col justify-center">
        <div className="font-inria-serif text-center text-3xl">{fullName}</div>
      </div>
      <div className="mx-auto flex h-5 w-40 justify-center">
        <div className="font-inria-serif text-center text-lg">{gradClass}</div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-kpso-blue font-inria-serif mx-auto mt-2 flex h-7 w-26 cursor-pointer flex-col justify-center rounded-xl"
        onClick={() => setShowModal(true)}
      >
        <div className="text-center text-white">Read More</div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 mx-15 mt-20 flex items-center justify-center transition-all md:mx-0"
          >
            <div className="absolute inset-0" />
            <div
              ref={modalRef}
              className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-4 text-2xl font-bold"
              >
                {fullName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-justify text-base leading-relaxed"
              >
                {readMoreText}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-kpso-blue mt-6 cursor-pointer rounded px-4 py-2 text-white"
                onClick={() => setShowModal(false)}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlumniCard;
