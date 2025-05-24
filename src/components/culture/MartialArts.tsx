import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";
import FMA from "@/public/suites/FMA.webp";

const MartialArts = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center">
        <Image
          src={FMA}
          alt="FMA Image"
          className="mx-0 mt-10 h-60 w-auto rounded-md sm:h-80 md:h-100 lg:h-120 xl:mx-80 xl:mt-20 xl:h-130"
        />
      </div>

      <p className="font-inria-serif text-md mx-10 mt-15 inline-block justify-center text-center leading-12 md:text-lg lg:mx-30 lg:text-xl xl:mx-70">
        <span className="mr-2 text-4xl text-blue-800 lg:text-5xl">
          FILIPINO MARTIAL ARTS (FMA)
        </span>
        , often referred to as arnis, eskrima, or kali, encompass a diverse
        range of traditional martial arts systems that originate from the
        Philippines. These martial arts are known for their practical and
        efficient techniques, as well as their emphasis on using everyday
        objects as weapons. The three terms–arnis, eskrima, and kali–are often
        used interchangeably, although there are some distinctions in their
        historical and regional usage.
      </p>

      <div className="hidden xl:block">
        <Image
          src={blueFlower}
          alt="FLOWER"
          width={400}
          height={300}
          className="absolute top-120 -right-50"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={200}
          height={200}
          className="absolute top-130 left-0 scale-x-[-1]"
        />
        <Image
          src={blueShortVine}
          alt="SHORTVINE"
          width={250}
          height={200}
          className="absolute top-160 -left-5 scale-x-[-1] -rotate-10"
        />
      </div>
    </div>
  );
};

export default MartialArts;
