import Header from "@/components/Header";
import HeaderImg from "@/public/components/HEADER.webp";
import webppunanComponent from "@/components/about/webppunan";

const webppunan = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />
      <webppunanComponent />
    </>
  );
};

export default webppunan;
