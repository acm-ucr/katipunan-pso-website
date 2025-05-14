import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";
import Tinikling_img from "@/public/suites/Tinikling.webp";

const Tinikling = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="TINIKLING" />
      <div className="flex justify-center">
        <Image
          src={Tinikling_img}
          alt="Tinikling Image"
          className="mt-20 mr-80 ml-80 h-[500px] w-full rounded-md"
        />
      </div>

      <p className="font-inria-serif mt-15 mr-100 ml-100 inline-block justify-center text-center text-xl leading-12">
        <span className="mr-2 text-5xl text-blue-800">TINIKLING</span> is a
        traditional Philippine folk dance that originated during the Spanish
        colonial era. The dance involves two people beating, tapping, and
        sliding bamboo poles on the ground and against each other in
        coordination with one or more dancers who step over and in between the
        poles in a dance. It’s meant to imitate the tinkling birds stepping over
        the bamboo traps that farmers made.
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

export default Tinikling;
