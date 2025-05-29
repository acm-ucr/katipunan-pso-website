import Header from "@/components/Header";
import HeaderImg from "@/public/components/HEADER.webp";
import webpComponent from "@/components/about/webp";

const webp = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />
      <webpComponent />
    </>
  );
};

export default webp;
