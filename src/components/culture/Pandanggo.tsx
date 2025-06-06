"use client";
import { motion } from "motion/react";
import PandanggoImg from "@/public/suites/Pandanggo.webp";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Pandanggo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex justify-center"
      >
        <Image
          src={PandanggoImg}
          alt="Pandanggo"
          className="mx-0 mt-10 h-60 w-auto rounded-md sm:h-80 md:h-100 lg:h-120 xl:mx-80 xl:mt-20 xl:h-130"
        />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-inria-serif text-md inline-block w-11/12 justify-center text-center leading-12 md:w-3/4 md:text-lg lg:text-xl"
      >
        This popular dance of grace and balance comes from Lubang Island,
        Mindoro int he Visayas region. The term
        <span className="mx-2 text-4xl text-blue-800 lg:text-5xl">
          PANDANGGO
        </span>
        comes from the spanish word fandango, which is a dance characterized by
        lively steps and clapping that varies in rhythm in ¾ time. This
        particular Pandanggo involves the presence of three tinggoy, or oil
        lamps, balanced on the head and the back of each hand. After a good
        catch, fishermen of Lingayen would celebrate by drinking wine and by
        dancing, swinging and circling a lighted lamp.
      </motion.div>

      <div className="hidden xl:block">
        <Image
          src={blueFlower}
          alt="FLOWER"
          width={400}
          height={300}
          className="absolute top-120 -right-50"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={200}
          height={200}
          className="absolute top-130 left-0 scale-x-[-1]"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={250}
          height={200}
          className="absolute top-160 -left-5 scale-x-[-1] -rotate-10"
        />
      </div>
    </div>
  );
};

export default Pandanggo;
