import Image from "next/image";
import Social from "@/public/Social.svg";
import Academic from "@/public/Academic.svg";
import Cultural from "@/public/Cultural.svg";
import Community from "@/public/Community.svg";

const Pillars = () => {
  return (
    <div className="overflow-x-hidde w-full">
      {/* SOCIAL */}
      <div className="relative w-full">
        <Image
          src={Social}
          alt="SOCIAL IMAGE"
          className="w-full object-cover pr-30"
        />
        <div className="font-inria-serif absolute top-10 right-0 text-center text-4xl text-black sm:top-20 sm:text-6xl md:text-7xl lg:text-8xl">
          SOCIAL
          <div className="mt-3 h-1 w-50 bg-black sm:w-80 md:w-160" />
        </div>
      </div>

      {/* ACADEMIC */}
      <div className="relative w-full">
        <Image
          src={Academic}
          alt="ACADEMIC IMAGE"
          className="mt-10 w-full object-cover pl-30 sm:mt-20 md:mt-20 lg:mt-0"
        />
        <div className="font-inria-serif absolute top-0 left-0 text-center text-4xl text-black sm:text-6xl md:text-7xl lg:text-8xl">
          ACADEMIC
          <div className="mt-3 h-1 w-50 bg-black sm:w-100 md:w-160" />
        </div>
      </div>

      {/* CULTURAL */}
      <div className="relative w-full">
        <Image
          src={Cultural}
          alt="CULTURAL IMAGE"
          className="w-full object-cover pr-30"
        />
        <div className="font-inria-serif absolute top-5 right-0 text-center text-4xl text-black sm:top-15 sm:text-6xl md:top-20 md:text-7xl lg:top-50 lg:text-8xl">
          CULTURAL
          <div className="mt-3 h-1 w-60 bg-black sm:w-100 md:w-160" />
        </div>
      </div>

      {/* COMMUNITY */}
      <div className="relative w-full">
        <Image
          src={Community}
          alt="COMMUNITY IMAGE"
          className="w-full object-cover pl-30"
        />
        <div className="font-inria-serif absolute top-0 left-0 text-center text-4xl text-black sm:text-6xl md:top-5 md:text-7xl lg:top-10 lg:text-8xl">
          COMMUNITY
          <div className="mt-3 h-1 w-60 bg-black sm:w-100 md:w-160" />
        </div>
      </div>
    </div>
  );
};

export default Pillars;
