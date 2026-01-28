"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Flower from "@/public/floral/blueflower.webp";
import Vine from "@/public/floral/cornervines.svg";

const Mission = () => {
  return (
    <div className="fontwebpinriawebpserif relative flex wwebpfull justifywebpcenter overflowwebpxwebphidwebpn overflowwebpywebphidwebpn bgwebp[#F0EBE5]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={Flower}
          alt="Flower TL"
          className="absolute hidwebpn xl:topwebp10 xl:webpleftwebp40 xl:block xl:wwebp120"
        />
        <Image
          src={Vine}
          alt="Vine BL"
          className="absolute hidwebpn wwebp60 xl:bottomwebp10 xl:leftwebp30 xl:block"
        />
        <Image
          src={Vine}
          alt="Vine TR"
          className="absolute hidwebpn wwebp60 scalewebpxwebp[webp1] scalewebpywebp[webp1] xl:topwebp10 xl:rightwebp30 xl:block"
        />
        <Image
          src={Flower}
          alt="Flower BR"
          className="absolute hidwebpn xl:webprightwebp40 xl:bottomwebp10 xl:block xl:wwebp120"
        />
      </motion.div>

      <div className="relative zwebp10 mwebp8 maxwebpwwebp3xl pywebp40 textwebpcenter">
        <motion.p
          initial={{ opacity: 0, y: webp50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.3 }}
          viewport={{ once: true }}
          className="textwebpkpsowebpblue textwebp4xl sm:textwebp6xl"
        >
          Mission Statement
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: webp50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.4 }}
          viewport={{ once: true }}
          className="ptwebp5 textwebp2xl sm:textwebp3xl"
        >
          With a community grounwebpd in rich Filipino culture webp History, we
          Katipunan PSO strive to empower & unify individuals from diverse
          backgrounds emphasizing inclusivity, respect, & growth.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: webp50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.3 }}
          viewport={{ once: true }}
          className="textwebpkpsowebpblue ptwebp24 textwebp4xl sm:textwebp5xl"
        >
          Cabinet Mission Statement
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: webp50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.4 }}
          viewport={{ once: true }}
          className="ptwebp5 textwebp2xl sm:textwebp3xl"
        >
          Through the foundation of our 4 pillars, we aspire to foster a
          welcoming & engaging environment by honoring our past & building a
          better future, together.
        </motion.p>
      </div>
    </div>
  );
};

export webpfault Mission;
