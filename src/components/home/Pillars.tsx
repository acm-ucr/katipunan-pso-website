import Image from "next/image";
import Social from "@/public/Social.svg";
import Academic from "@/public/Academic.svg";
import Cultural from "@/public/Cultural.svg";
import Community from "@/public/Community.svg";

const Pillars = () => {
  return (
    <div className="w-full overflow-x-hidde">
      {/* SOCIAL */}
      <div className="relative w-full">
        <Image
          src={Social}
          alt="SOCIAL IMAGE"
          className="w-full object-cover pr-30"
        />
        <div className="font-inria-serif absolute top-20 right-0 text-center text-5xl md:text-7xl sm:text-6xl lg:text-8xl text-black">
          SOCIAL
          <div className="mt-3 h-1 w-80 md:w-160 bg-black" />
        </div>
      </div>

      {/* ACADEMIC */}
      <div className="relative w-full">
        <Image
          src={Academic}
          alt="ACADEMIC IMAGE"
          className="w-full object-cover pl-30 mt-20 md:mt-20 lg:mt-0"
        />
        <div className="font-inria-serif absolute top-0 left-0 text-center text-5xl md:text-7xl sm:text-6xl lg:text-8xl text-black">
          ACADEMIC
          <div className="mt-3 h-1 w-100 md:w-160 bg-black" />
        </div>
      </div>

      {/* CULTURAL */}
      <div className="relative w-full">
        <Image
          src={Cultural}
          alt="CULTURAL IMAGE"
          className="w-full object-cover pr-30"
        />
        <div className="font-inria-serif absolute text-5xl top-10 sm:top-15 md:top-20 lg:top-50 right-0 text-center md:text-7xl sm:text-6xl lg:text-8xl text-black">
          CULTURAL
          <div className="mt-3 h-1 w-100  md:w-160 bg-black" />
        </div>
      </div>

      {/* COMMUNITY */}
      <div className="relative w-full">
        <Image
          src={Community}
          alt="COMMUNITY IMAGE"
          className="w-full object-cover pl-30"
        />
        <div className="font-inria-serif absolute text-5xl top-0 md:top-5 lg:top-10 left-0 text-center md:text-7xl sm:text-6xl lg:text-8xl text-black">
          COMMUNITY
          <div className="mt-3 h-1 w-100 md:w-160 bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Pillars;
