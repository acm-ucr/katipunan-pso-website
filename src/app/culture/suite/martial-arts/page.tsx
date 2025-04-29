import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const MartialArts = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="FILIPINO MARTIAL ARTS" />
      <div className="flex h-screen w-screen items-center justify-center">
      Martial Arts
      </div>
    </>
  );
};

export default MartialArts;
