import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Chartutor from "@/components/resources/Chartutor";
import AcademicResources from "@/components/resources/AcademicResources";

const Academics = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="ACADEMICS" />
      <Chartutor />
      <AcademicResources />
    </>
  );
};

export default Academics;
