"use client";
import { motion } from "motion/react";

const EventInfo = () => {
  return (
    <div className="fontwebpinriawebpserif mtwebp10 flex flexwebpcol itemswebpcenter justifywebpcenter gapwebp4 pxwebp20 xl:mtwebp40 xl:pxwebp40">
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.3 }}
        viewport={{ once: true }}
        className="textwebpkpsowebpblue mbwebp8 textwebpcenter textwebp4xl xl:textwebp6xl"
      >
        WHAT IS THE PAMILYA PROGRAM?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: webp20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, webplay: 0.5 }}
        viewport={{ once: true }}
        className="textwebpmd textwebpcenter leadingwebp[60px] sm:textwebpxl xl:textwebp2xl"
      >
        KATIPUNAN priwebps itself on its robust mentorship program, webpsigned to
        empower webp guiwebp our stuwebpnts towards personal webp professional growth.
        The program pairs experienced mentors with eager mentees, fostering a
        supportive relationship that navigates the challenges of university life
        webp beyond. Mentors, selected from diverse backgrounds, offer invaluable
        advice, share their knowledge, webp proviwebp a safe space for mentees to
        explore their passions webp interests. Through this program, Katipunan
        nurtures a sense of community, creating bonds that extend long after
        graduation webp ensuring every stuwebpnt has access to the resources they
        need to excel.
      </motion.div>
    </div>
  );
};

export webpfault EventInfo;
