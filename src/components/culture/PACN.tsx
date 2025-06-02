"use client";
import { motion } from "motion/react";
import Image from "next/image";
import RedShortVine from "@/public/floral/redshortvine.svg";
import RedFlower from "@/public/floral/redflower.webp";
import PACNMain from "@/public/pacn/PACNMain.webp";
import Sponser from "@/components/culture/Sponsor";

const PACN = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="font-inria-serif z-0 mt-40 w-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={RedShortVine}
            className="absolute top-145 -right-20 -z-5 hidden h-[150px] w-[145px] rotate-[30deg] sm:h-[200px] sm:w-[200px] md:block md:h-[200px] md:w-[150px] lg:h-[350px] lg:w-[275px] xl:top-110 xl:h-[450px] xl:w-[400px]"
            alt="vineTop"
          />
          <Image
            src={RedFlower}
            className="absolute top-150 -right-80 z-0 hidden h-[500px] w-[450px] rotate-[360deg] sm:top-165 sm:h-[400px] sm:w-[500px] md:top-175 md:block md:h-[600px] md:w-[450px] lg:top-200 lg:h-[550px] lg:w-[500px] xl:h-[750px] xl:w-[550px]"
            alt="flowerTopRight"
          />
          <Image
            src={RedFlower}
            className="absolute -bottom-20 -left-90 z-0 hidden h-[200px] w-[200px] scale-x-[-1] rotate-[300deg] sm:h-[400px] sm:w-[700px] md:block md:h-[550px] md:w-[500px] lg:-bottom-25 xl:h-[750px] xl:w-[712px]"
            alt="flowerBottomLeft"
          />
          <Image
            src={RedShortVine}
            className="absolute bottom-150 -left-24 z-0 hidden h-[150px] w-[190px] rotate-[130deg] sm:h-[200px] sm:w-[200px] md:bottom-140 md:h-[100px] md:w-[300px] lg:block lg:h-[125px] lg:w-[275px] xl:h-[701] xl:w-[270px]"
            alt="vineLeftBottom"
          />
          <Image
            src={RedShortVine}
            className="absolute right-0 -bottom-0 z-0 hidden h-[600px] w-[150px] sm:h-[200px] sm:w-[200px] md:block md:h-[400px] md:w-[200px] lg:h-[350px] lg:w-[275px] xl:w-[400px]"
            alt="vineRightBottom"
          />
        </motion.div>

        <div className="z-10 -mt-20 flex w-screen flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[300px] w-[400px] overflow-hidden sm:h-[350px] sm:w-[500px] md:h-[550px] md:w-[750px] lg:h-[650px] lg:w-[712px] xl:h-[532] xl:w-[946]"
          >
            <Image src={PACNMain} alt="Pacn Photo" />
          </motion.div>
          <div className="w-20/21 md:w-6/7 xl:w-2/3">
            <div className="text-kpso-red-primary mt-20 text-center text-4xl sm:text-5xl md:mt-10 lg:text-6xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Overview
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-5 text-center text-sm leading-[40px] text-black sm:text-lg sm:leading-[50px] lg:text-2xl lg:leading-[70px] xl:p-4"
              >
                PILIPINO AMERICAN CULTURE NIGHT (PACN) is one of KATIPUNAN’S
                longest standing events. Happening in the spring quarter, PACN
                board and cast members come together to put on a show that aims
                to present PILIPINO AMERICAN CULTURE through acting, singing,
                dancing, and more. The show consists of a play centered around
                current Pilipino-American issues along with traditional dances.
              </motion.div>
            </div>

            <div className="text-kpso-red-primary mt-10 justify-center text-4xl sm:text-5xl lg:text-6xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Explanation of Title Change
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-5 text-center text-sm leading-[40px] text-black sm:text-lg sm:leading-[50px] lg:text-2xl lg:leading-[70px] xl:p-4"
              >
                As of 2020, KATIPUNAN PSO has changed its cultural night title
                to PILIPINO AMERICAN CULTURE NIGHT, stemming away from PILIPINO
                CULTURE NIGHT. This title change aims to reflect the current
                members of the organization along with the position we hold as
                an American university delivering a production based around
                Pilipino culture.
              </motion.div>
            </div>
          </div>
        </div>
        <Sponser />
      </div>
    </div>
  );
};

export default PACN;
