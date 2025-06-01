"use client";
import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Contact from "@/components/events/Contact";
import KE from "@/public/events/KE.webp";
import Image from "next/image";
import BlueFlower from "@/public/floral/blueflower.webp";
import BlueVine from "@/public/floral/blueshortvine.svg";
import { motion } from "motion/react";

const Ke = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="Katipunan Experience (KE)"
      />
      <div className="font-inria-serif mt-30 overflow-x-hidden overflow-y-hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src={BlueFlower}
            alt="Flower"
            className="absolute top-180 z-[-10] mt-190 -ml-45 w-90 scale-x-[-1] scale-y-[-1] lg:top-125 lg:-ml-90 lg:w-180"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={BlueVine}
            alt="Vine"
            className="absolute top-95 right-0 z-[-10] w-25 scale-y-[-1] md:top-115 md:w-45 lg:top-137 lg:w-70"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={BlueVine}
            alt="Vine"
            className="absolute top-65 right-0 z-[-10] mt-60 w-25 md:top-110 md:w-45 lg:top-160 lg:w-70"
          />
        </motion.div>

        <div className="z-0 mr-[18%] ml-[18%] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <Image src={KE} alt="Bg" className="w-250" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-kpso-blue mt-20 pt-10 text-center text-5xl"
          >
            The Katipunan Experience (KE)
            <span className="text-2xl text-black">
              is our annual high school conference here at UC Riverside. At KE,
              high school students will be surrounded with mentor college
              students, inspirational speakers, and other high school students
              from all parts of Southern California. This day will be packed
              with a lot of group bonding, a multitude of workshops that range
              from Academics to Mental Health to Arts Expression, and fun
              activities for the high schoolers and college students
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="pt-40 text-center text-2xl"
          >
            Contact our Outreach Director, Lovel Cruz, with any questions,
            comments or concerns.
          </motion.div>
        </div>
      </div>
      <div className="">
        <Contact
          name="ucrkatipunanoutreach"
          instagramLink="https://www.instagram.com/ucrkatipunanoutreach/"
        />
      </div>
    </>
  );
};

export default Ke;
