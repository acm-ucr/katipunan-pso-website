"use client";
import { motion } from "motion/react";
import Link from "next/link";

const Subscribe = ({ NewsLink }: { NewsLink: string }) => {
  return (
    <div className="mt-5 flex min-h-screen w-full items-start justify-center sm:mt-10 md:mt-15 lg:mt-20 xl:mt-30">
      <div className="flex cursor-pointer flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-inria-serif text-md w-60 text-center text-wrap sm:w-80 sm:text-xl xl:text-2xl"
        >
          Subscribe to our newsletter to see what we're up to!
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-kpso-blue m-4 flex max-w-fit rounded-xl p-4 shadow-xl shadow-neutral-500/80 xl:p-6"
        >
          <Link href={NewsLink} target="_blank">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-inria-serif text-md text-center text-neutral-50 sm:text-sm xl:text-2xl"
            >
              Subscribe
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Subscribe;
