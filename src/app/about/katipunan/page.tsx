import Header from "@/components/Header";
import What from "@/components/about/What";
import Who from "@/components/about/Who";
import How from "@/components/about/How";
import HeaderImg from "@/public/components/HEADER.webp";
import BlueDual from "@/public/floral/bluedualflowers.webp";
import Blue from "@/public/floral/blueflower.webp";
import Vine from "@/public/floral/bluevine.png";
import Image from "next/image";

const Katipunan = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />

      <div className="relative w-full overflow-x-hidden overflow-y-hidden">
        <div className="hidden xl:block">
          <Image
            src={BlueDual}
            alt="Decorative Dual Flower"
            width={900}
            height={900}
            className="absolute -right-80 bottom-140 z-10"
          />
          <Image
            src={Vine}
            alt="Decorative Vine"
            width={300}
            height={300}
            className="absolute right-80 bottom-194 z-10"
          />

          <Image
            src={Blue}
            alt="Blue Single Flower"
            width={300}
            height={300}
            className="absolute top-40 right-10 z-10"
          />

          <Image
            src={Vine}
            alt="Decorative Vine"
            width={200}
            height={200}
            className="absolute top-45 -right-25 z-10 scale-x-[-1] scale-y-[-1]"
          />
          <Image
            src={Vine}
            alt="Decorative Vine"
            width={200}
            height={200}
            className="absolute top-25 -right-7 z-10 scale-x-[-1] scale-y-[-1] -rotate-45"
          />
        </div>

        <div className="mb-32"></div>
        <What />
        <div className="mb-30"></div>

        <div className="flex w-full flex-col items-center justify-center gap-40">
          <Who />
          <How />
        </div>
      </div>
    </>
  );
};

export default Katipunan;
