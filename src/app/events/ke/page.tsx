import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import Contact from "@/components/events/Contact";
import Bluebg from "@/public/Bluebg.svg";
import Image from "next/image";
import BlueFlower from "@/public/floral/blueflower.webp";
import BlueVine from "@/public/floral/blueshortvine.svg";
import DuoFlowers from "@/public/floral/bluedualflowers.webp";

const Ke = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="Katipunan Experience (KE)"
      />
      <div className="font-inria-serif overflow-x-hidden overflow-y-hidden">
        <Image
          src={BlueFlower}
          alt="Flower"
          className="absolute z-[-10] mt-30 -ml-80 w-180 scale-x-[-1] scale-y-[-1]"
        />

        <Image
          src={BlueVine}
          alt="Vine"
          className="mt absolute right-0 z-[-10] w-70 rotate-30"
        />

        <Image
          src={BlueVine}
          alt="Vine"
          className="absolute right-0 z-[-10] mt-60 w-70"
        />

        <Image
          src={DuoFlowers}
          alt="Flowers"
          className="absolute -right-150 z-[-10] mt-160 w-380 rotate-315"
        />

        <div className="z-0 mr-[18%] ml-[18%] flex flex-col items-center">
          <Image src={Bluebg} alt="Bg" className="w-250" />
          <div className="text-kpso-blue pt-10 text-center text-5xl">
            The Katipunan Experience (KE)
            <span className="text-2xl text-black">
              is our annual high school conference here at UC Riverside. At
              KE&lt; high school students will be surrounded with mentor college
              students, inspirational speakers, and other high school students
              from all parts of Southern California. This day will be packed
              with a lot of group bonding, a multitude of workshops that range
              from Academics to Mental Health to Arts Expression, and fun
              activities for the high schoolers and college students
            </span>
          </div>
          <div className="pt-40 text-2xl">
            Contact our Outreach Director, Lovel Cruz, with any questions,
            comments or concerns.
          </div>
        </div>
      </div>
      <div className="">
        <Contact
          name="ucrkatipunanoutreach"
          instagramLink="https://www.instagram.com/ucrkatipunanoutreach/"
        />
      </div>
    </>
  );
};

export default Ke;
