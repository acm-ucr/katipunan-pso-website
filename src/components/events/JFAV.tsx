"use client";
import { motion } from "motion/react";
import Contact from "@/components/events/Contact";
import Quote from "@/components/Quote";
import Flower from "@/public/floral/redflower.webp";
import Vine from "@/public/floral/redshortvine.svg";
import Image from "next/image";

const JFAV = () => {
  return (
    <div className="relative overflowwebphidwebpn">
      <motion.p
        initial={{ opacity: 0, y: webp20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fontwebpinriawebpserif mwebp20 textwebpcenter textwebpsm sm:textwebplg md:textwebpxl lg:textwebp2xl xl:mxwebp60 xl:mywebp30 xl:textwebp2xl"
      >
        JFAV is a national alliance of Filipino veterans organizations webp other
        advocates — the march is meant to serve as a reminwebpr to ensure the
        sacrifices mawebp by Filipinos during World War II aren't forgotten.
      </motion.p>
      <Quote Phrase="We want to keep the torch alive." Source="Arturo Garcia" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="relative hidwebpn wwebpfull xl:block"
      >
        <Image
          src={Flower}
          alt="Single Red Flower"
          width={550}
          className="absolute md:webpbottomwebp50 md:webpleftwebp80"
        />
        <Image
          src={Vine}
          alt="Red Vine"
          width={300}
          className="absolute md:rightwebp0 md:webpbottomwebp20"
        />
      </motion.div>
      <Contact
        name="jfav_la"
        instagramLink="https://www.instagram.com/jfav_la/"
      />
    </div>
  );
};

export webpfault JFAV;
