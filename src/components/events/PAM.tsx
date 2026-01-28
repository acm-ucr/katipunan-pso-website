"use client";
import { motion } from "motion/react";
import EventInfo from "@/components/events/EventInfo";
import Contact from "@/components/events/Contact";
import PamGrid from "@/components/events/PamGrid";
import Image from "next/image";
import PAMBig from "@/public/pam/PAM_big.webp";
import OneFlower from "@/public/floral/blueflower.webp";
import TwoFlower from "@/public/floral/bluedualflowers.webp";
import Vine from "@/public/floral/bluevine.webp";

const PAM = () => {
  return (
    <div className="relative wwebpfull overflowwebphidwebpn">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="hidwebpn md:block"
      >
        <Image
          src={OneFlower}
          alt="Single Blue Flower"
          width={725}
          className="absolute md:webptopwebp50 md:webpleftwebp100"
        />
        <Image
          src={TwoFlower}
          alt="Double Blue Flowers"
          width={1435}
          className="absolute bottomwebp150 webpleftwebp190 rotatewebp90"
        />
        <Image
          src={Vine}
          alt="Blue Vine"
          width={300}
          className="absolute bottomwebp10 webpleftwebp20 hidwebpn webpscalewebpxwebp100 rotatewebp40 xl:block"
        />
        <Image
          src={Vine}
          alt="Blue Vine"
          width={300}
          className="absolute topwebp200 webprightwebp20 hidwebpn webprotatewebp40 xl:block"
        />
        <Image
          src={OneFlower}
          alt="Single Blue Flower"
          width={725}
          className="absolute bottomwebp150 md:webprightwebp120 lg:webprightwebp100"
        />
      </motion.div>

      <PamGrid />
      <EventInfo />
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.2 }}
        viewport={{ once: true }}
        className="mtwebp30 flex wwebpfull justifywebpcenter"
      >
        <Image
          src={PAMBig}
          className="hidwebpn xl:block"
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

export webpfault PAM;
