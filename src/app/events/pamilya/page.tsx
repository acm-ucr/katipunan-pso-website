"use client";
import { motion } from "motion/react";

import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import EventInfo from "@/components/events/EventInfo";
import Contact from "@/components/events/Contact";
import PamGrid from "@/components/events/PamGrid";
import Image from "next/image";
import PAMBig from "@/public/pam/PAM_big.webp";

const Pamilya = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PAMILYA PROGRAM" />
      <div>
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
    </>
  );
};

export default Pamilya;
