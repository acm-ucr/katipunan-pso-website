import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import PandanggoComponent from "@/components/culture/Pandanggo";

const Pandanggo = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PANDANGGO" />
      <PandanggoComponent />
    </>
  );
};

export default Pandanggo;
