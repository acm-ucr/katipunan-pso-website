"use client";
import Image from "next/image";
import { motion } from "motion/react";
import WIKImg1 from "@/public/about/What1.webp";
import WIKImg2 from "@/public/about/What2.webp";
import WIKImg3 from "@/public/about/What3.webp";

const What = () => {
  return (
    <div className="relative mt-20 mb-32 flex w-full flex-col overflow-x-hidden lg:mt-0 lg:flex-row">
      <div className="font-inria-serif flex w-full flex-col justify-center p-8 xl:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="-mt-10 text-center text-xl leading-11 tracking-wider sm:mx-20 sm:text-2xl lg:max-w-md xl:ml-40 xl:text-2xl"
        >
          <span className="inline-block text-3xl text-blue-800 sm:text-4xl md:text-5xl">
            Katipunan PSO{" "}
          </span>{" "}
          is a cultural organization at the University of California, Riverside
          that aims to enrich the understanding and appreciation of Filipino
          culture. Katipunan hosts a variety of events such as general meetings,
          cultural showcases, socials, and much more. These events are intended
          to raise awareness about Filipinx culture and to promote and encourage
          a strong sense of community among Filipinx students and allies at UCR.
        </motion.p>
      </div>

      <div className="hidden w-1/2 flex-col items-center justify-center overflow-x-hidden overflow-y-hidden pt-16 lg:mr-20 lg:mb-20 lg:flex lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={WIKImg1}
            width={420}
            height={320}
            alt="Kati image 1"
            className="z-0 rounded-xl xl:-translate-x-20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={WIKImg2}
            width={420}
            height={320}
            alt="Kati image 2"
            className="-z-10 rounded-xl xl:-translate-y-4 xl:translate-x-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={WIKImg3}
            width={420}
            height={320}
            alt="Kati image 3"
            className="-z-20 rounded-xl xl:-translate-x-30 xl:-translate-y-8"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default What;
