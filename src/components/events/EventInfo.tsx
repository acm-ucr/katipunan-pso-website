"use client";
import { motion } from "motion/react";

const EventInfo = () => {
  return (
    <div className="font-inria-serif mt-10 flex flex-col items-center justify-center gap-4 px-20 xl:mt-40 xl:px-40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-kpso-blue mb-8 text-center text-4xl xl:text-6xl"
      >
        WHAT IS THE PAMILYA PROGRAM?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-md text-center sm:text-xl sm:leading-[50px] xl:text-2xl xl:leading-[70px]"
      >
        KATIPUNAN prides itself on its robust mentorship program, designed to
        empower and guide our students towards personal and professional growth.
        The program pairs experienced mentors with eager mentees, fostering a
        supportive relationship that navigates the challenges of university life
        and beyond. Mentors, selected from diverse backgrounds, offer invaluable
        advice, share their knowledge, and provide a safe space for mentees to
        explore their passions and interests. Through this program, webp
        nurtures a sense of community, creating bonds that extend long after
        graduation and ensuring every student has access to the resources they
        need to excel.
      </motion.div>
    </div>
  );
};

export default EventInfo;
