import Image from "next/image";
import Social from "@/public/Social.svg";
import Academic from "@/public/Academic.svg";
import Cultural from "@/public/Cultural.svg";
import Community from "@/public/Community.svg";

const Pillars = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="font-inria-serif relative top-27 left-80 z-20 text-4xl lg:top-62 lg:left-200 lg:text-7xl">
        SOCIAL
        <div className="relative top-2 h-1 w-sm bg-black lg:top-5 lg:w-lg"></div>
      </div>
      <Image src={Social} alt="SOCIAL IMAGE" className="relative w-7xl" />
      <div className="font-inria-serif relative top-8 left-5 z-20 text-4xl lg:top-10 lg:left-10 lg:text-7xl">
        ACADEMIC
        <div className="relative top-2 h-1 w-sm bg-black lg:top-5 lg:w-lg"></div>
      </div>
      <Image
        src={Academic}
        alt="ACADEMIC IMAGE"
        className="relative bottom-13 left-18 w-7xl lg:bottom-40"
      />
      <div className="font-inria-serif relative bottom-10 left-70 z-20 text-4xl lg:bottom-30 lg:left-200 lg:text-7xl">
        CULTURAL
        <div className="relative top-2 h-1 w-sm bg-black lg:top-5 lg:w-lg"></div>
      </div>
      <Image
        src={Cultural}
        alt="CULTURAL IMAGE"
        className="relative bottom-45 lg:bottom-120 lg:w-7xl"
      />
      <div className="font-inria-serif relative bottom-55 z-20 text-4xl lg:bottom-150 lg:text-7xl">
        COMMUNITY
        <div className="relative top-2 h-1 w-sm bg-black lg:top-5 lg:w-lg"></div>
      </div>
      <Image
        src={Community}
        alt="COMMUNITY IMAGE"
        className="relative bottom-75 left-18 w-7xl lg:bottom-200"
      />
    </div>
  );
};

export default Pillars;
