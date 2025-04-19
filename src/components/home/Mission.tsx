import React from "react";
import Image from "next/image";
import Flower from "@/public/floral/blueflower.webp";
import Vine from "@/public/floral/cornervines.svg";

const Mission = () => {
  return (
    <div className="font-inria-serif relative items-start overflow-hidden">
      <div className="absolute -mr-30 flex shrink-0 flex-col overflow-visible">
        <div>
          <Image
            src={Flower}
            alt="Flower"
            className="-ml-20 w-135 scale-x-[-1] scale-y-[-1]"
          />
        </div>
        <div>
          <Image src={Vine} alt="Vine" className="ml-20 w-60 pt-20" />
        </div>
      </div>

      <div className="relative left-1/4 flex w-[50%] flex-col py-40 text-center">
        <div className="text-kpso-blue text-6xl">Mission Statement</div>
        <div className="pt-5 text-3xl">
          With a community grounded in rich Filipino culture and History, we
          webp PSO strive to empower & unify individuals from diverse
          backgrounds emphasizing inclusivity, respect, & growth.
        </div>
        <div className="text-kpso-blue pt-25 text-5xl">
          Cabinet Mission Statement
        </div>
        <div className="pt-5 text-3xl">
          Through the foundation of our 4 pillars, we aspire to foster a
          welcoming & engaging environment by honoring our past & building a
          better future, together.
        </div>
      </div>

      <div className="absolute top-0 right-0 -mr-30 flex shrink-0 flex-col">
        <div>
          <Image
            src={Vine}
            alt="Vine"
            className="mt-20 w-60 scale-x-[-1] scale-y-[-1]"
          />
        </div>
        <div>
          <Image src={Flower} alt="Flower" className="w-116 pt-10" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
