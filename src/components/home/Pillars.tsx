import Image from "next/image";
import Social from "@/public/Social.svg";
import Academic from "@/public/Academic.svg";
import Cultural from "@/public/Cultural.svg";
import Community from "@/public/Community.svg";

const Pillars = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="font-inria-serif relative top-62 left-200 z-20 text-7xl">
        SOCIAL
        <div className="relative top-5 h-1 w-lg bg-black"></div>
      </div>
      <Image src={Social} alt="SOCIAL IMAGE" className="relative w-7xl" />
      <div className="font-inria-serif relative top-10 left-10 z-20 text-7xl">
        ACADEMIC
        <div className="relative top-5 h-1 w-lg bg-black"></div>
      </div>
      <Image
        src={Academic}
        alt="ACADEMIC IMAGE"
        className="relative bottom-40 left-18 w-7xl"
      />
      <div className="font-inria-serif relative bottom-35 left-200 z-20 text-7xl">
        CULTURAL
        <div className="relative top-5 h-1 w-lg bg-black"></div>
      </div>
      <Image
        src={Cultural}
        alt="CULTURAL IMAGE"
        className="relative bottom-120 w-7xl"
      />
      <div className="font-inria-serif relative bottom-150 z-20 text-7xl">
        COMMUNITY
        <div className="relative top-5 h-1 w-lg bg-black"></div>
      </div>
      <Image
        src={Community}
        alt="COMMUNITY IMAGE"
        className="relative bottom-200 left-18 w-7xl"
      />
    </div>
  );
};

export default Pillars;
