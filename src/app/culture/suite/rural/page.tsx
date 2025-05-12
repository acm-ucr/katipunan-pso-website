import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Rural = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="RURAL" />
      <div className="flex justify-center">
        <div className="mt-20 mr-80 ml-80 h-[500] w-full rounded-md bg-blue-500 text-center text-blue-800"></div>
      </div>

      <p className="font-inria-serif mt-15 mr-100 ml-100 inline-block justify-center text-center text-xl leading-12">
        <span className="mr-2 text-5xl text-blue-800">RURAL</span> represents
        the festive spirit of the Philippines as its dances foster the love for
        life. Bright colors adorned by the dancers reflect the attitudes being
        portrayed across the routines. These dances are common in town fiestas
        or after a good harvest, exemplifying joy and strong spirit through
        their lively, upbeat music and coordination. With effortless smiles,
        this suite emphasizes seeing the light in all situations.
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

export default Rural;
