import Image from "next/image";
import Img1 from "@/public/University of California, Riverside.svg";
import Header from "@/public/HEADER.webp";
import Flower from "@/public/floral/blackflower.webp";
import Vine from "@/public/floral/shortvine.svg";
import Club from "@/public/webppunan PSO.svg";

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
        className="absolute top-85 left-63 w-70 scale-x-[-1]"
      />

      <Image
        src={Flower}
        alt="FLOWER"
        className="absolute top-15 -right-146 w-70 object-cover"
      />

      <Image
        src={Header}
        alt="Group"
        className="relative top-40 -right-105 z-20 h-80 w-150 rounded-lg shadow-lg"
      />

      <Image
        src={Club}
        alt="CLUBNAME"
        className="relative top-34 left-165 z-20 w-75"
      />

      <Image
        src={Vine}
        alt="VINE"
        className="relative bottom-45 left-87 w-18"
      />

      <Image
        src={Vine}
        alt="VINE"
        className="relative bottom-74 left-245 h-40 w-18 scale-x-[-1] scale-y-[-1]"
      />
      <Image
        src={Vine}
        alt="VINE"
        className="relative bottom-60 left-118 w-18 scale-x-[-1] rotate-90"
      />
    </div>
  );
};

export default Landing;
