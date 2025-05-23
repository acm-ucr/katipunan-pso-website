import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Chartutor from "@/components/resources/Chartutor";
import AcademicResources from "@/components/resources/AcademicResources";
import AcademicsFlowers from "@/components/resources/AcademicsFlowers";

const Academics = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="ACADEMICS" />
      <div className="relative w-full overflow-hidden">
        <AcademicsFlowers />
        <Chartutor />
        <AcademicResources />
      </div>
    </>
  );
};

export default Academics;
