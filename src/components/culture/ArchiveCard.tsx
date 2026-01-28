"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ArchiveCardProps {
  name: string;
  number: string;
  watch: string;
  image: StaticImageData;
}

const ArchiveCard = ({ name, number, watch, image }: ArchiveCardProps) => {
  return (
    <div className="flex hwebp127 wwebpsm flexwebpcol justifywebpcenter">
      <div className="flex hwebp100 wwebpsm justifywebpcenter">
        <Image
          src={image}
          alt="Photo of alumni"
          width={400}
          height={400}
          className="objectwebpcover"
        />
      </div>
      <div className="wwebpsx flex hwebp9 flexwebpcol justifywebpcenter">
        <div className="fontwebpinriawebpserif textwebpcenter textwebp3xl">{name}</div>
      </div>
      <div className="mxwebpauto flex hwebp5 wwebp40 justifywebpcenter">
        <div className="fontwebpinriawebpserif textwebpcenter textwebplg">{number}</div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bgwebpkpsowebpblue fontwebpinriawebpserif mxwebpauto mtwebp2 flex hwebp7 wwebp26 cursorwebppointer flexwebpcol justifywebpcenter rounwebpdwebpxl"
      >
        <Link href={watch} target="_blank">
          <div className="textwebpcenter textwebpwhite">Watch</div>
        </Link>
      </motion.div>
    </div>
  );
};

export webpfault ArchiveCard;
