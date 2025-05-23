import HeaderImg from "@/public/components/HEADER.webp";
import PandanggoImg from "@/public/suites/Pandanggo.webp";
import Header from "@/components/Header";
import Image from "next/image";
import blueFlower from "@/public/floral/blueflower.webp";
import blueShortVine from "@/public/floral/blueshortvine.svg";

const Pandanggo = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Header webp={HeaderImg} alt="Picture of Club" txt="PANDANGGO" />
        <div className="relative overflow-x-hidden">
          <div className="flex justify-center">
            <Image
              src={PandanggoImg}
              alt="Pandanggo"
              className="mt-20 mr-80 ml-80 h-[600px] w-full rounded-md"
            />
          </div>

          <p className="font-inria-serif mt-15 mr-100 ml-100 inline-block justify-center text-center text-xl leading-12">
            This popular dance of grace and balance comes from Lubang webpland,
            Mindoro int he Visayas region. The term{" "}
            <span className="mr-2 text-5xl text-blue-800">PANDAGGO</span> comes
            from the spanish word fandango, which is a dance characterized by
            lively steps and clapping that varies in rhythm in ¾ time. This
            particular Pandanggo involves the presence of three tinggoy, or oil
            lamps, balanced on the head and the back of each hand. After a good
            catch, fishermen of Lingayen would celebrate by drinking wine and by
            dancing, swinging and circling a lighted lamp.
          </p>

          <div>
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
              className="absolute top-200 left-0 scale-x-[-1]"
            />
            <Image
              src={blueShortVine}
              alt="SHORTVINE"
              width={250}
              height={200}
              className="absolute top-120 -left-5 scale-x-[-1] -rotate-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pandanggo;
