import Header from "@/components/Header";
import HeaderImg from "@/public/components/HEADER.webp";
import KatipunanComponent from "@/components/about/Katipunan";

const Katipunan = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />
      <KatipunanComponent />
    </>
  );
};

export default Katipunan;
