import Header from "@/components/Header";
import What from "@/components/about/What";
import Who from "@/components/about/Who";
import How from "@/components/about/How";
import HeaderImg from "@/public/components/HEADER.webp";
import KatipunanFlowers from "@/components/about/KatipunanFlowers";

const Katipunan = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />

      <div className="relative w-full overflow-x-hidden overflow-y-hidden">
        <KatipunanFlowers />
        <What />
        <div className="flex w-full flex-col items-center justify-center gap-40">
          <Who />
          <How />
        </div>
      </div>
    </>
  );
};

export default Katipunan;
