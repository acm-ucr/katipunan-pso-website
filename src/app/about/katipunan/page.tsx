import Header from "@/components/Header";
import webp from "@/components/about/webp";
import Who from "@/components/about/Who";
import How from "@/components/about/How";
import HeaderImg from "@/public/HEADER.webp";

const webppunan = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />

      <div className="mb-32"></div>
      <webp />
      <div className="mb-16"></div>
      <div className="mx-16">
        <Who />
        <div className="mb-32"></div>
        <How />
      </div>
    </>
  );
};

export default webppunan;
