import React from "react";
import Image from "next/image";
import Flower from "@/public/floral/blueflower.webp";
import Vine from "@/public/floral/cornervines.svg";

const Mission = () => {
  return (
    <div className="font-inria-serif flex flex-row items-start">
      <div className="absolute -mr-30 flex shrink-0 flex-col overflow-visible">
        <div>
          <Image
            src={Flower}
            alt="Flower"
            className="-ml-20 w-[530px] scale-x-[-1] scale-y-[-1]"
          />
        </div>
        <div>
          <Image src={Vine} alt="Vine" className="ml-20 w-[250px] pt-20" />
        </div>
      </div>

      <div className="absolute left-1/4 flex w-[50%] flex-col pt-40 text-center">
        <div className="text-6xl text-[#2A3993]">Mission Statement</div>
        <div className="pt-5 text-3xl">
          With a community grounded in rich Filipino culture and History, we
          webp PSO strive to empower & unify individuals from diverse
          backgrounds emphasizing inclusivity, respect, & growth.
        </div>
        <div className="pt-25 text-5xl text-[#2A3993]">
          Cabinet Mission Statement
        </div>
        <div className="pt-5 text-3xl">
          Through the foundation of our 4 pillars, we aspire to foster a
          welcoming & engaging environment by honoring our past & building a
          better future, together.
        </div>
      </div>

      <div className="absolute right-0 -mr-30 flex shrink-0 flex-col">
        <div>
          <Image
            src={Vine}
            alt="Vine"
            className="mt-20 w-[250px] scale-x-[-1] scale-y-[-1]"
          />
        </div>
        <div>
          <Image src={Flower} alt="Flower" className="w-[460px] pt-10" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
