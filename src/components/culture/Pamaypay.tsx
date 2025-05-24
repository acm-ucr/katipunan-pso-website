import PamaypayImg from "@/public/suites/Pamaypay.webp";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Pamaypay = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center">
        <Image
          src={PamaypayImg}
          alt="Pamaypay"
          className="mx-0 mt-10 h-60 w-auto rounded-md sm:h-80 md:h-100 lg:h-120 xl:mx-80 xl:mt-20 xl:h-130"
        />
      </div>

      <p className="font-inria-serif text-md mx-10 mt-15 inline-block justify-center text-center leading-12 md:text-lg lg:mx-30 lg:text-xl xl:mx-70">
        The
        <span className="mx-2 text-4xl text-blue-800 lg:text-5xl">
          PAMAYPAY
        </span>
        was a popular accessory among Filipinas, especially during the Spanish
        colonial period. It was not only used for fanning, but also became a
        tool for discreet communication between women and men. Specific
        movements and positions of the Pamaypay, such as fanning it from the
        right side (single) or fanning slowly (disinterest), carried coded
        messages.
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

export default Pamaypay;
