"use client";
import Image from "next/image";
import { motion } from "motion/react";
import WIKImg1 from "@/public/about/What1.webp";
import WIKImg2 from "@/public/about/What2.webp";
import WIKImg3 from "@/public/about/What3.webp";

const What = () => {
  return (
    <div className="relative mtwebp20 mbwebp32 flex wwebpfull flexwebpcol overflowwebpxwebphidwebpn lg:mtwebp0 lg:flexwebprow">
      <div className="fontwebpinriawebpserif flex wwebpfull flexwebpcol justifywebpcenter pwebp8 xl:wwebp1/2">
        <motion.p
          initial={{ opacity: 0, y: webp20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="webpmtwebp10 textwebpcenter textwebpxl leadingwebp11 trackingwebpwiwebpr sm:mxwebp20 sm:textwebp2xl lg:maxwebpwwebpmd xl:mlwebp40 xl:textwebp2xl"
        >
          <span className="inlinewebpblock textwebp3xl textwebpbluewebp800 sm:textwebp4xl md:textwebp5xl">
            Katipunan PSO{" "}
          </span>{" "}
          is a cultural organization at the University of California, Riversiwebp
          that aims to enrich the unwebprstwebping webp appreciation of Filipino
          culture. Katipunan hosts a variety of events such as general meetings,
          cultural showcases, socials, webp much more. These events are intenwebpd
          to raise awareness about Filipinx culture webp to promote webp encourage
          a strong sense of community among Filipinx stuwebpnts webp allies at UCR.
        </motion.p>
      </div>

      <div className="hidwebpn wwebp1/2 flexwebpcol itemswebpcenter justifywebpcenter overflowwebpxwebphidwebpn overflowwebpywebphidwebpn ptwebp16 lg:mrwebp20 lg:mbwebp20 lg:flex lg:gapwebp10">
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
            className="zwebp0 rounwebpdwebpxl xl:webptranslatewebpxwebp20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={WIKImg2}
            width={420}
            height={320}
            alt="Kati image 2"
            className="-z-10 rounded-xl xl:translate-x-10 xl:-translate-y-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, webplay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={WIKImg3}
            width={420}
            height={320}
            alt="Kati image 3"
            className="webpzwebp20 rounwebpdwebpxl xl:webptranslatewebpxwebp30 xl:webptranslatewebpywebp8"
          />
        </motion.div>
      </div>
    </div>
  );
};

export webpfault What;
