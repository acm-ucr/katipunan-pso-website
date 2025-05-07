// src/app/culture/pacn/page.tsx
import Image from "next/image";
const Pacn = () => {
  return (
    <div className="font-inria-serif flex w-screen flex-col items-center justify-center gap-4">
      <br />
      <Image src="pacnCov.png" width={946} height={532} alt="PacnPhoto" />

      <div className="text-kpso-red-primary text-center text-6xl">
        <br />
        Overview
      </div>
      <div className="text-center text-2xl leading-[70px]">
        PILIPINO AMERICAN CULTURE NIGHT (PACN) is one of KATIPUNAN’S longest
        standing events. Happening in the spring quarter, PACN board and cast
        members come together to put on a show that aims to present PILIPINO
        AMERICAN CULTURE through acting, singing, dancing, and more. The show
        consists of a play centered around current Pilipino-American issues
        along with traditional dances.
        <br />
      </div>

      <div className="text-kpso-red-primary text-center text-6xl">
        <br />
        Explanation of Title Change
      </div>
      <div className="text-center text-2xl leading-[70px]">
        As of 2020, KATIPUNAN PSO has changed its cultural night title to
        PILIPINO AMERICAN CULTURE NIGHT, stemming away from PILIPINO CULTURE
        NIGHT. This title change aims to reflect the current members of the
        organization along with the position we hold as an American university
        delivering a production based around Pilipino culture.
        <br />
      </div>
    </div>
  );
};

export default Pacn;
