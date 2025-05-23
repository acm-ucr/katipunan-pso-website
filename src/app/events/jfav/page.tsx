"use client";
import { motion } from "motion/react";
import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Contact from "@/components/events/Contact";
import Quote from "@/components/Quote";
import Flower from "@/public/floral/redflower.webp";
import Vine from "@/public/floral/redshortvine.svg";
import Image from "next/image";

const Jfav = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Header
          webp={HeaderImg}
          alt="Picture of Club"
          txt="Justice for Filipino American Veterans (JFAV)"
        />
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-inria-serif m-20 text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:mx-60 xl:my-30 xl:text-2xl"
        >
          JFAV is a national alliance of Filipino veterans organizations and
          other advocates — the march is meant to serve as a reminder to ensure
          the sacrifices made by Filipinos during World War II aren't forgotten.
        </motion.p>
        <Quote
          Phrase="We want to keep the torch alive."
          Source="Arturo Garcia"
        />
        <div className="overflow-hiddden relative w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
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
      </div>
    </>
  );
};

export default Jfav;
