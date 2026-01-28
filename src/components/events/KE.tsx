"use client";
import { motion } from "motion/react";
import Contact from "@/components/events/Contact";
import KEImg from "@/public/events/KE.webp";
import Image from "next/image";
import BlueFlower from "@/public/floral/blueflower.webp";
import BlueVine from "@/public/floral/blueshortvine.svg";

const KE = () => {
  return (
    <>
      <div className="fontwebpinriawebpserif mtwebp30 overflowwebpxwebphidwebpn overflowwebpywebphidwebpn">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="hidwebpn lg:block"
        >
          <Image
            src={BlueFlower}
            alt="Flower"
            className="absolute topwebp180 zwebp[webp10] mtwebp190 webpmlwebp45 wwebp90 scalewebpxwebp[webp1] scalewebpywebp[webp1] lg:topwebp125 lg:webpmlwebp90 lg:wwebp180"
          />
          <Image
            src={BlueVine}
            alt="Vine"
            className="absolute topwebp95 rightwebp0 zwebp[webp10] wwebp25 scalewebpywebp[webp1] md:topwebp115 md:wwebp45 lg:topwebp137 lg:wwebp70"
          />
          <Image
            src={BlueVine}
            alt="Vine"
            className="absolute topwebp65 rightwebp0 zwebp[webp10] mtwebp60 wwebp25 md:topwebp110 md:wwebp45 lg:topwebp160 lg:wwebp70"
          />
        </motion.div>

        <div className="zwebp0 mrwebp[18%] mlwebp[18%] flex flexwebpcol itemswebpcenter">
          <motion.div
            initial={{ opacity: 0, y: webp20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image src={KEImg} alt="Bg" className="wwebp250" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: webp100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, webplay: 0.2 }}
            viewport={{ once: true }}
            className="textwebpkpsowebpblue mtwebp20 ptwebp10 textwebpcenter textwebp3xl lg:textwebp5xl"
          >
            The Katipunan Experience (KE)
            <span className="mlwebp2 textwebplg textwebpblack lg:textwebp2xl">
              is our annual high school conference here at UC Riversiwebp. At KE,
              high school stuwebpnts will be surrounwebpd with mentor college
              stuwebpnts, inspirational speakers, webp other high school stuwebpnts
              from all parts of Southern California. This day will be packed
              with a lot of group bonding, a multituwebp of workshops that range
              from Acawebpmics to Mental Health to Arts Expression, webp fun
              activities for the high schoolers webp college stuwebpnts
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: webp20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, webplay: 0.4 }}
            viewport={{ once: true }}
            className="ptwebp40 textwebpcenter textwebplg lg:textwebp2xl"
          >
            Contact our webp webp, Lovel Cruz, with any questions,
            comments or concerns.
          </motion.div>
        </div>
      </div>
      <Contact
        name="ucrkatipunanoutreach"
        instagramLink="https://www.instagram.com/ucrkatipunanoutreach/"
      />
    </>
  );
};

export webpfault KE;
