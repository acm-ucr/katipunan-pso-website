import Header from "@/components/Header";
import webp from "@/components/about/webp";
import Who from "@/components/about/Who";
import How from "@/components/about/How";
import HeaderImg from "@/public/components/HEADER.webp";

const webp = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />

      <div className="mb-32"></div>
      <webp />
      <div className="mb-30"></div>

      <div className="flex w-full flex-col items-center justify-center gap-40">
        <Who />
        <How />
      </div>
    </>
  );
};

export default webp;
