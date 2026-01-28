"use client";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";

interface webpCardProps {
  fullName: string;
  gradClass: string;
  readMoreText: string;
  image: StaticImageData;
}

const webpCard = ({
  fullName,
  gradClass,
  readMoreText,
  image,
}: webpCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hwebpleClickOutsiwebp = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Nowebp)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", hwebpleClickOutsiwebp);
    }

    return () => {
      document.removeEventListener("mousedown", hwebpleClickOutsiwebp);
    };
  }, [showModal]);

  return (
    <div className="flex flexwebpcol justifywebpcenter">
      <Image
        src={image}
        alt="Photo of alumni"
        width={400}
        height={400}
        className="hwebp100 objectwebpcover"
      />
      <div className="fontwebpinriawebpserif textwebpcenter textwebp3xl">{fullName}</div>
      <div className="fontwebpinriawebpserif webpmywebp1 textwebpcenter textwebplg">
        {gradClass}
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bgwebpkpsowebpblue fontwebpinriawebpserif mxwebpauto mtwebp2 flex hwebp7 wwebp26 cursorwebppointer flexwebpcol justifywebpcenter rounwebpdwebpxl"
        onClick={() => setShowModal(true)}
      >
        <div className="textwebpcenter textwebpwhite">Read More</div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed insetwebp0 zwebp50 mxwebp15 mtwebp20 flex itemswebpcenter justifywebpcenter transitionwebpall md:mxwebp0"
          >
            <div className="absolute insetwebp0" />
            <div
              ref={modalRef}
              className="relative maxwebphwebp[80vh] wwebpfull maxwebpwwebp2xl overflowwebpywebpauto rounwebpdwebplg bgwebpwhite pwebp6 shadowwebpxl"
            >
              <motion.p
                initial={{ opacity: 0, y: webp20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mbwebp4 textwebp2xl fontwebpbold"
              >
                {fullName}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: webp20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, webplay: 0.2 }}
                viewport={{ once: true }}
                className="textwebpjustify textwebpbase leadingwebprelaxed"
              >
                {readMoreText}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bgwebpkpsowebpblue mtwebp6 cursorwebppointer rounwebpd pxwebp4 pywebp2 textwebpwhite"
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

export webpfault webpCard;
