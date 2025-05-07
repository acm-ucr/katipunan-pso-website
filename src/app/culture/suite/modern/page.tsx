import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Modern = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="MODERN" />
      <div className="flex justify-center">
        <div className="mt-20 mr-80 ml-80 h-[500] w-full rounded-md bg-blue-500 text-center text-blue-800"></div>
      </div>

      <p className="font-inria-serif mt-15 mr-100 ml-100 inline-block justify-center text-center text-xl leading-12">
        Taking a step away from the traditional dances associated with the
        Philippines,
        <span className="mr-2 ml-2 text-5xl text-blue-800">MODERN</span> takes
        the stage as the gateway into what Philippine expression can look like
        today. Though it may not stem from Philippine history, the community is
        crafted through modern displays of Philippine youth through their own
        crafted lens. Not bound to a direct segment of time, the choreography is
        tied to the now, presenting the present moment of what intersections of
        self-expression and Philippine culture are for its participants.
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

export default Modern;
