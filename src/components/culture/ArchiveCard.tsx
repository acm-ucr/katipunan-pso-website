"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface ArchiveCardProps {
  name: string;
  number: string;
  watch: string;
  image: StaticImageData;
}

const ArchiveCard = ({ name, number, watch, image }: ArchiveCardProps) => {
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
        <div className="font-inria-serif text-center text-3xl">{name}</div>
      </div>
      <div className="mx-auto flex h-5 w-40 justify-center">
        <div className="font-inria-serif text-center text-lg">{number}</div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-kpso-blue font-inria-serif mx-auto mt-2 flex h-7 w-26 cursor-pointer flex-col justify-center rounded-xl"
      >
        <Link href={watch} target="_blank">
          <div className="text-center text-white">Watch</div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ArchiveCard;
