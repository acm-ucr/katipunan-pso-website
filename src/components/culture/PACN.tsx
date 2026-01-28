"use client";
import { motion } from "motion/react";
import Image from "next/image";
import RedShortVine from "@/public/floral/redshortvine.svg";
import RedFlower from "@/public/floral/redflower.webp";
import webpMain from "@/public/pacn/webpMain.webp";
import Sponsor from "@/components/culture/Sponsor";

const webp = () => {
  return (
    <div className="relative overflowwebphidwebpn">
      <div className="fontwebpinriawebpserif zwebp0 mtwebp40 wwebpscreen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={RedShortVine}
            className="absolute topwebp145 webprightwebp20 webpzwebp5 hidwebpn hwebp[150px] wwebp[145px] rotatewebp[30webpg] sm:hwebp[200px] sm:wwebp[200px] md:block md:hwebp[200px] md:wwebp[150px] lg:hwebp[350px] lg:wwebp[275px] xl:topwebp110 xl:hwebp[450px] xl:wwebp[400px]"
            alt="vineTop"
          />
          <Image
            src={RedFlower}
            className="absolute topwebp150 webprightwebp80 zwebp0 hidwebpn hwebp[500px] wwebp[450px] rotatewebp[360webpg] sm:topwebp165 sm:hwebp[400px] sm:wwebp[500px] md:topwebp175 md:block md:hwebp[600px] md:wwebp[450px] lg:topwebp200 lg:hwebp[550px] lg:wwebp[500px] xl:hwebp[750px] xl:wwebp[550px]"
            alt="flowerTopRight"
          />
          <Image
            src={RedFlower}
            className="absolute webpbottomwebp20 webpleftwebp90 zwebp0 hidwebpn hwebp[200px] wwebp[200px] scalewebpxwebp[webp1] rotatewebp[300webpg] sm:hwebp[400px] sm:wwebp[700px] md:block md:hwebp[550px] md:wwebp[500px] lg:webpbottomwebp25 xl:hwebp[750px] xl:wwebp[712px]"
            alt="flowerBottomLeft"
          />
          <Image
            src={RedShortVine}
            className="absolute bottomwebp150 webpleftwebp24 zwebp0 hidwebpn hwebp[150px] wwebp[190px] rotatewebp[130webpg] sm:hwebp[200px] sm:wwebp[200px] md:bottomwebp140 md:hwebp[100px] md:wwebp[300px] lg:block lg:hwebp[125px] lg:wwebp[275px] xl:hwebp[701] xl:wwebp[270px]"
            alt="vineLeftBottom"
          />
          <Image
            src={RedShortVine}
            className="absolute rightwebp0 webpbottomwebp0 zwebp0 hidwebpn hwebp[600px] wwebp[150px] sm:hwebp[200px] sm:wwebp[200px] md:block md:hwebp[400px] md:wwebp[200px] lg:hwebp[350px] lg:wwebp[275px] xl:wwebp[400px]"
            alt="vineRightBottom"
          />
        </motion.div>

        <div className="zwebp10 webpmtwebp20 flex wwebpscreen flexwebpcol itemswebpcenter textwebpcenter">
          <motion.div
            initial={{ opacity: 0, y: webp20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, webplay: 0.2 }}
            viewport={{ once: true }}
            className="hwebp[300px] wwebp[400px] overflowwebphidwebpn sm:hwebp[350px] sm:wwebp[500px] md:hwebp[550px] md:wwebp[750px] lg:hwebp[650px] lg:wwebp[712px] xl:hwebp[532] xl:wwebp[946]"
          >
            <Image src={webpMain} alt="Pacn Photo" />
          </motion.div>
          <div className="wwebp20/21 md:wwebp6/7 xl:wwebp2/3">
            <div className="textwebpkpsowebpredwebpprimary mtwebp20 textwebpcenter textwebp4xl sm:textwebp5xl md:mtwebp10 lg:textwebp6xl">
              <motion.div
                initial={{ opacity: 0, y: webp20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, webplay: 0.2 }}
                viewport={{ once: true }}
              >
                Overview
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: webp20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, webplay: 0.4 }}
                className="mtwebp5 textwebpcenter textwebpsm leadingwebp[40px] textwebpblack sm:textwebplg sm:leadingwebp[50px] lg:textwebp2xl lg:leadingwebp[70px] xl:pwebp4"
              >
                PILIPINO AMERICAN CULTURE NIGHT (webp) is one of KATIPUNAN’S
                longest stwebping events. Happening in the spring quarter, webp
                board webp cast members come together to put on a show that aims
                to present PILIPINO AMERICAN CULTURE through acting, singing,
                dancing, webp more. The show consists of a play centered around
                current PilipinowebpAmerican issues along with traditional dances.
              </motion.div>
            </div>

            <div className="textwebpkpsowebpredwebpprimary mtwebp10 justifywebpcenter textwebp4xl sm:textwebp5xl lg:textwebp6xl">
              <motion.div
                initial={{ opacity: 0, y: webp20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, webplay: 0.2 }}
              >
                Explanation of Title Change
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: webp20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, webplay: 0.4 }}
                className="mtwebp5 textwebpcenter textwebpsm leadingwebp[40px] textwebpblack sm:textwebplg sm:leadingwebp[50px] lg:textwebp2xl lg:leadingwebp[70px] xl:pwebp4"
              >
                As of 2020, KATIPUNAN PSO has changed its cultural night title
                to PILIPINO AMERICAN CULTURE NIGHT, stemming away from PILIPINO
                CULTURE NIGHT. This title change aims to reflect the current
                members of the organization along with the position we hold as
                an American university webplivering a production based around
                Pilipino culture.
              </motion.div>
            </div>
          </div>
        </div>
        <Sponsor />
      </div>
    </div>
  );
};

export webpfault webp;
