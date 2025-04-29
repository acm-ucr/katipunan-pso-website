import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const SuiteOverview = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="SUITE OVERVIEW" />
      <div className="flex h-screen w-screen items-center justify-center">
        SUITE OVERVIEW
      </div>
    </>
  );
};

export default SuiteOverview;
