import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";
import FMA from "@/public/suites/FMA.webp";

const MartialArts = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Header
          webp={HeaderImg}
          alt="Picture of Club"
          txt="FILIPINO MARTIAL ARTS"
        />
        <div className="flex justify-center">
          <Image
            src={FMA}
            alt="FMA Image"
            className="mt-20 mr-80 ml-80 h-[500px] w-full rounded-md"
          />
        </div>
        <p className="font-inria-serif mt-15 mr-100 ml-100 inline-block justify-center text-center text-xl leading-12">
          <span className="mr-2 text-5xl text-blue-800">
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
        <div className="">
          <Image
            src={blueFlower}
            alt="FLOWER"
            width={400}
            height={300}
            className="absolute top-220 -right-50"
          />
          <Image
            src={blueShortVine}
            alt="SHORTVINE"
            width={200}
            height={200}
            className="absolute top-300 left-0 scale-x-[-1]"
          />
          <Image
            src={blueShortVine}
            alt="SHORTVINE"
            width={250}
            height={200}
            className="absolute top-220 -left-5 scale-x-[-1] -rotate-10"
          />
        </div>
      </div>
    </>
  );
};

export default MartialArts;
