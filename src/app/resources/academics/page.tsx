import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import Chartutor from "@/components/resources/Chartutor";

const Academics = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="ACADEMICS" />
      <Chartutor />
    </>
  );
};

export default Academics;
