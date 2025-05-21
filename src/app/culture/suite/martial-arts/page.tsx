import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";
import FMA from "@/public/suites/FMA.webp";

const MartialArts = () => {
  return (
    <>
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
        <span className="mr-2 text-5xl text-blue-800">FMA</span> TBA
      </p>

      <div>
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
    </>
  );
};

export default MartialArts;
