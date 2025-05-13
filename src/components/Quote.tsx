import React from "react";
import Image from "next/image";
import Sun from "@/public/components/Sun.svg";

const Quote = ({ Phrase, Source }: { Phrase: string; Source: string }) => {
  return (
    <div className="font-inria-serif flex flex-row overflow-x-hidden bg-gradient-to-b from-transparent via-[#51578160] to-[#2A3993]">
      <div className="ml-10 flex self-auto pt-5 text-4xl text-white sm:ml-30 sm:pt-15 sm:text-5xl md:pt-35 md:text-7xl lg:text-9xl">
        ❝
      </div>
      <div className="-mr-10 ml-auto flex flex-col items-center justify-center text-white sm:-mr-20 md:-mr-30">
        <div className="text-center text-lg sm:text-2xl md:text-3xl xl:text-4xl">
          {Phrase}
        </div>
        <div className="pt-5 text-sm sm:text-xl md:text-2xl xl:text-3xl">
          {Source}
        </div>
      </div>
      <div className="mb-15 ml-auto flex flex-shrink-0 justify-end">
        <Image
          src={Sun}
          alt="Filipino Sun"
          className="h-auto w-50 object-contain sm:w-80 md:w-120 xl:w-170"
        />
      </div>
    </div>
  );
};

export default Quote;
