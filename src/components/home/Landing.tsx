import Image from "next/image";
import Img1 from "@/public/University of California, Riverside.svg";
import Header from "@/public/HEADER.webp";
import Flower from "@/public/floral/blackflower.webp";
import Vine from "@/public/floral/shortvine.svg";
import Club from "@/public/Katipunan PSO.svg";

const Landing = () => {
  return (
    <div className="relative w-2/5">
      <Image
        src={Img1}
        alt="UCR-NAME"
        className="absolute top-32 left-107 w-80"
      />
      <Image
        src={Flower}
        alt="FLOWER"
        className="absolute top-85 left-65 w-[20vw] scale-x-[-1]"
      />

      <Image
        src={Header}
        alt="Group"
        className="relative top-40 -right-105 h-80 w-[120vw]"
      />

      <Image
        src={Flower}
        alt="FLOWER"
        className="absolute top-15 -right-145 w-[20vw]"
      />

      <Image
        src={Club}
        alt="CLUBNAME"
        className="relative top-35 left-165 w-[22vw]"
      />

      <Image
        src={Vine}
        alt="VINE"
        className="relative bottom-50 left-87 h-[35vh] w-[5vw]"
      />

      <Image
        src={Vine}
        alt="VINE"
        className="relative bottom-97 left-245 h-[35vh] w-[5vw] scale-x-[-1] scale-y-[-1]"
      />
      <Image
        src={Vine}
        alt="VINE"
        className="relative bottom-98 left-118 h-[35vh] w-[5vw] scale-x-[-1] rotate-90"
      />
    </div>
  );
};

export default Landing;
