import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import ModernComponent from "@/components/culture/Modern";

const Modern = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="MODERN" />
      <ModernComponent />
    </>
  );
};

export default Modern;
