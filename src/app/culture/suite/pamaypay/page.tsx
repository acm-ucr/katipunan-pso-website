import HeaderImg from "@/public/components/HEADER.webp";
import PamaypayImg from "@/public/suites/Pamaypay.webp";
import Header from "@/components/Header";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Pamaypay = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Header webp={HeaderImg} alt="Picture of Club" txt="PAMAYPAY" />

        <div className="flex justify-center">
          <Image
            src={PamaypayImg}
            alt="Pamaypay"
            className="mt-20 mr-80 ml-80 h-[600px] w-full rounded-md"
          />
        </div>
        <p className="font-inria-serif mt-15 mr-100 ml-100 inline-block justify-center text-center text-xl leading-12">
          The <span className="mr-2 ml-2 text-5xl text-blue-800">PAMAYPAY</span>{" "}
          was a popular accessory among filipinas, especially during the spanish
          colonial period. It was not only used for fanning, but also became a
          tool for discreet communication between women and men. Specific
          movements and positions of the Pamaypay, such as fangling it from the
          right side (single) or fanning slowly (disinterest), carried coded
          messages.
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

export default Pamaypay;
