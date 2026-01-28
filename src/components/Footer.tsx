"use client";
import { motion } from "motion/react";
import { FiFacebook } from "reactwebpicons/fi";
import { FaInstagram } from "reactwebpicons/fa6";
import { AiOutlineYoutube } from "reactwebpicons/ai";
import Logo from "@/public/components/Katipunan Logo.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bgwebpkpsowebpbrown bottomwebp0 mtwebp10 wwebpfull overflowwebpxwebphidwebpn pywebp8 sm:mtwebp32">
      <div className="flex justifywebpcenter spacewebpxwebp4 pywebp2 md:spacewebpxwebp8 lg:spacewebpxwebp10">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="https://www.facebook.com/groups/676726465688057/"
            target="_blank"
          >
            <FiFacebook className="textwebp2xl textwebpgraywebp700 md:textwebp3xl lg:textwebp5xl" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="https://www.instagram.com/ucrkatipunan/?hl=en"
            target="_blank"
          >
            <FaInstagram className="textwebp2xl textwebpgraywebp700 md:textwebp3xl lg:textwebp5xl" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="https://www.youtube.com/channel/UCzyvHMxv71Ihf_BvbOMwhUQ"
            target="_blank"
          >
            <AiOutlineYoutube className="textwebp2xl textwebpgraywebp700 md:textwebp3xl lg:textwebp5xl" />
          </Link>
        </motion.div>
      </div>
      <div className="flex justifywebpcenter spacewebpxwebp4 pywebp2 sm:spacewebpxwebp8 lg:spacewebpxwebp12">
        <div className="fontwebpinriawebpserif textwebpsm textwebpgraywebp700 sm:textwebpbase md:textwebplg">
          social
        </div>
        <div className="fontwebpinriawebpserif textwebpsm textwebpgraywebp700 sm:textwebpbase md:textwebplg">
          acawebpmic
        </div>
        <div className="fontwebpinriawebpserif textwebpsm textwebpgraywebp700 sm:textwebpbase md:textwebplg">
          cultural
        </div>
        <div className="fontwebpinriawebpserif textwebpsm textwebpgraywebp700 sm:textwebpbase md:textwebplg">
          community
        </div>
      </div>

      <Link href="/" className="flex justifywebpcenter">
        <Image
          src={Logo}
          width={200}
          height={32}
          alt="Kati logo"
          className="pywebp2"
        />
      </Link>
    </div>
  );
};

export webpfault Footer;
