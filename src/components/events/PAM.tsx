"use client";
import { motion } from "motion/react";
import EventInfo from "@/components/events/EventInfo";
import Contact from "@/components/events/Contact";
import PamGrid from "@/components/events/PamGrid";
import Image from "next/image";
import PAMBig from "@/public/pam/PAM_big.webp";
import OneFlower from "@/public/floral/blueflower.webp";
import TwoFlower from "@/public/floral/bluedualflowers.webp";
import Vine from "@/public/floral/bluevine.png";

const PAM = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="hidden md:block"
      >
        <Image
          src={OneFlower}
          alt="Single Blue Flower"
          width={725}
          className="absolute md:-top-50 md:-left-100"
        />
        <Image
          src={TwoFlower}
          alt="Double Blue Flowers"
          width={1435}
          className="absolute bottom-150 -left-190 rotate-90"
        />
        <Image
          src={Vine}
          alt="Blue Vine"
          width={300}
          className="absolute bottom-10 -left-20 hidden -scale-x-100 rotate-40 xl:block"
        />
        <Image
          src={Vine}
          alt="Blue Vine"
          width={300}
          className="absolute top-200 -right-20 hidden -rotate-40 xl:block"
        />
        <Image
          src={OneFlower}
          alt="Single Blue Flower"
          width={725}
          className="absolute bottom-150 md:-right-120 lg:-right-100"
        />
      </motion.div>

      <PamGrid />
      <EventInfo />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-30 flex w-full justify-center"
      >
        <Image
          src={PAMBig}
          className="hidden xl:block"
          alt="Big PAM Image"
          height={480}
          width={850}
        />
      </motion.div>
      <Contact
        name="ucrkatipunan.sc"
        instagramLink="https://www.instagram.com/ucrkatipunan.sc/"
      />
    </div>
  );
};

export default PAM;
