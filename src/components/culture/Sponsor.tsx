import Image from "next/image";
import Seafood from "@/public/pacn/SeafoodCity.webp";

const Sponser = () => {
  return (
    <div>
      <div className="text-kpso-red-primary flex flex-col items-center justify-center p-10 text-center text-4xl sm:text-5xl lg:text-6xl">
        Sponsored By
        <Image
          src={Seafood}
          className="mt-10"
          width={300}
          alt="Seafood City Logo"
        />
      </div>
    </div>
  );
};

export default Sponser;
