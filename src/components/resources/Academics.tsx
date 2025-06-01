import Chartutor from "@/components/resources/Chartutor";
import AcademicResources from "@/components/resources/AcademicResources";
import AcademicsFlowers from "@/components/resources/AcademicsFlowers";

const Academics = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <AcademicsFlowers />
      <Chartutor />
      <AcademicResources />
    </div>
  );
};

export default Academics;
