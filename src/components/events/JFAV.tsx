"use client";
import { motion } from "motion/react";
import Contact from "@/components/events/Contact";
import Quote from "@/components/Quote";
import Flower from "@/public/floral/redflower.webp";
import Vine from "@/public/floral/redshortvine.svg";
import Image from "next/image";

const JFAV = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-inria-serif m-20 text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:mx-60 xl:my-30 xl:text-2xl"
      >
        JFAV is a national alliance of Filipino veterans organizations and other
        advocates — the march is meant to serve as a reminder to ensure the
        sacrifices made by Filipinos during World War II aren't forgotten.
      </motion.p>
      <Quote Phrase="We want to keep the torch alive." Source="Arturo Garcia" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="relative hidden w-full xl:block"
      >
        <Image
          src={Flower}
          alt="Single Red Flower"
          width={550}
          className="absolute md:-bottom-50 md:-left-80"
        />
        <Image
          src={Vine}
          alt="Red Vine"
          width={300}
          className="absolute md:right-0 md:-bottom-20"
        />
      </motion.div>
      <Contact
        name="jfav_la"
        instagramLink="https://www.instagram.com/jfav_la/"
      />
    </div>
  );
};

export default JFAV;
