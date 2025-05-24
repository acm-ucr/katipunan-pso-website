import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import TiniklingComponent from "@/components/culture/Tinikling";

const Tinikling = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="TINIKLING" />
      <TiniklingComponent />
    </>
  );
};

export default Tinikling;
