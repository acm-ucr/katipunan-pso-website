import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Image from "next/image";
import RedShortVine from "@/public/floral/redshortvine.svg";
import RedFlower from "@/public/floral/redflower.webp";
import PACNMain from "@/public/pacn/PACNMain.webp";
import Sponser from "@/components/culture/Sponser";

const Pacn = () => {
  return (
    <div className="relative overflow-hidden">
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="PILIPINO-AMERICAN CULTURE NIGHT
  (PACN)"
      />
      <div className="font-inria-serif z-0 mt-40 w-screen">
        <Image
          src={RedShortVine}
          className="absolute top-130 -right-20 z-0 rotate-[30deg]"
          width={300}
          height={450}
          alt="vineTop"
        />

        <Image
          src={RedFlower}
          className="absolute top-150 -right-80 z-0 rotate-[360deg]"
          width={712}
          height={701}
          alt="flowerTopRight"
        />

        <Image
          src={RedFlower}
          className="absolute -bottom-20 -left-90 z-0 scale-x-[-1] rotate-[300deg]"
          width={712}
          height={701}
          alt="flowerBottomLeft"
        />

        <Image
          src={RedShortVine}
          className="absolute bottom-150 -left-24 z-0 rotate-[130deg]"
          width={250}
          height={701}
          alt="vineLeftBottom"
        />

        <Image
          src={RedShortVine}
          className="absolute right-0 -bottom-50 z-0"
          width={300}
          height={701}
          alt="vineRightBottom"
        />

        <div className="z-10 flex w-screen flex-col items-center text-center">
          <div className="">
            <Image src={PACNMain} width={946} height={532} alt="Pacn Photo" />
          </div>
          <div className="w-2/3">
            <div className="text-kpso-red-primary mt-20 p-10 text-center text-6xl">
              Overview
              <div className="p-4 text-center text-2xl leading-[70px] text-black">
                PILIPINO AMERICAN CULTURE NIGHT (PACN) is one of KATIPUNAN’S
                longest standing events. Happening in the spring quarter, PACN
                board and cast members come together to put on a show that aims
                to present PILIPINO AMERICAN CULTURE through acting, singing,
                dancing, and more. The show consists of a play centered around
                current Pilipino-American issues along with traditional dances.
              </div>
            </div>

            <div className="text-kpso-red-primary p-10 text-center text-6xl">
              Explanation of Title Change
              <div className="p-4 text-center text-2xl leading-[70px] text-black">
                As of 2020, KATIPUNAN PSO has changed its cultural night title
                to PILIPINO AMERICAN CULTURE NIGHT, stemming away from PILIPINO
                CULTURE NIGHT. This title change aims to reflect the current
                members of the organization along with the position we hold as
                an American university delivering a production based around
                Pilipino culture.
              </div>
            </div>
          </div>
        </div>
        <Sponser />
      </div>
    </div>
  );
};

export default Pacn;
