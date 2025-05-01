import React from "react";
import Image from "next/image";
import Sun from "@/public/Sun.svg";

const Quote = ({ Phrase, Source }: { Phrase: string; Source: string }) => {
  return (
    <div className="font-inria-serif flex flex-row bg-gradient-to-b from-transparent via-[#51578160] to-[#2A3993]">
      <div className="ml-30 flex self-auto pt-35 text-9xl text-white">❝</div>
      <div className="-mr-30 ml-auto flex flex-col items-center justify-center text-white">
        <div className="text-center text-4xl">{Phrase}</div>
        <div className="pt-5 text-3xl">{Source}</div>
      </div>
      <div className="mb-15 ml-auto flex flex-shrink-0 justify-end">
        <Image
          src={Sun}
          alt="Filipino Sun"
          className="h-auto w-170 object-contain"
        />
      </div>
    </div>
  );
};

export default Quote;
