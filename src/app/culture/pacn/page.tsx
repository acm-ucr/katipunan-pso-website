// src/app/culture/pacn/page.tsx
import Image from "next/image";
const Pacn = () => {
  return (
    <div className="relative w-screen p-10">
      <Image
        src="https://raw.githubusercontent.com/acm-ucr/katipunan-pso-website/d2760ae17b53c51d4017c72b3b385f526c18ae3f/public/floral/redshortvine.svg"
        className="absolute top-7 -right-40 z-0 rotate-[30deg]"
        width={300}
        height={450}
        alt="vineTop"
      />

      <Image
        src="https://raw.githubusercontent.com/acm-ucr/katipunan-pso-website/refs/heads/dev/public/floral/redflower.webp"
        className="absolute top-30 -right-80 z-0 rotate-[360deg]"
        width={712}
        height={701}
        alt="flowerTopRight"
      />

      <Image
        src="https://raw.githubusercontent.com/acm-ucr/katipunan-pso-website/refs/heads/dev/public/floral/redflower.webp"
        className="absolute -bottom-600 -left-70 z-0 scale-x-[-1] rotate-[300deg]"
        width={712}
        height={701}
        alt="flowerBottomLeft"
      />

      <Image
        src="https://raw.githubusercontent.com/acm-ucr/katipunan-pso-website/d2760ae17b53c51d4017c72b3b385f526c18ae3f/public/floral/redshortvine.svg"
        className="absolute -bottom-400 -left-24 z-0 rotate-[130deg]"
        width={250}
        height={701}
        alt="vineLeftBottom"
      />

      <Image
        src="https://raw.githubusercontent.com/acm-ucr/katipunan-pso-website/d2760ae17b53c51d4017c72b3b385f526c18ae3f/public/floral/redshortvine.svg"
        className="absolute -right-28 -bottom-600 z-0"
        width={300}
        height={701}
        alt="vineRightBottom"
      />

      <div className="relative z-10 flex w-screen flex-col items-center justify-center gap-4 text-center">
        <div className="absolute top-[15rem]">
          <Image
            src="https://raw.githubusercontent.com/acm-ucr/katipunan-pso-website/d2760ae17b53c51d4017c72b3b385f526c18ae3f/public/orangebackground.svg"
            width={946}
            height={532}
            alt="PacnPhoto"
          />
        </div>
        <div className="absolute top-[60rem] w-2/3">
          <div className="text-kpso-red-primary p-10 text-center text-6xl">
            Overview
            <div className="p-4 text-center text-2xl leading-[70px] text-black">
              PILIPINO AMERICAN CULTURE NIGHT (PACN) is one of KATIPUNAN’S
              longest standing events. Happening in the spring quarter, PACN
              board and cast members come together to put on a show that aims to
              present PILIPINO AMERICAN CULTURE through acting, singing,
              dancing, and more. The show consists of a play centered around
              current Pilipino-American issues along with traditional dances.
            </div>
          </div>

          <div className="text-kpso-red-primary p-10 text-center text-6xl">
            Explanation of Title Change
            <div className="p-4 text-center text-2xl leading-[70px] text-black">
              As of 2020, KATIPUNAN PSO has changed its cultural night title to
              PILIPINO AMERICAN CULTURE NIGHT, stemming away from PILIPINO
              CULTURE NIGHT. This title change aims to reflect the current
              members of the organization along with the position we hold as an
              American university delivering a production based around Pilipino
              culture.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pacn;
