import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import AcademicsComponent from "@/components/resources/Academics";

const Academics = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="ACADEMICS" />
      <AcademicsComponent />
    </>
  );
};

export default Academics;
