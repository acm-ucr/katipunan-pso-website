import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Suite from "@/components/culture/Suite";

const SuiteOverview = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="SUITE OVERVIEW" />
      <div className="flex justify-center">
        <Suite />
      </div>
    </>
  );
};

export default SuiteOverview;
