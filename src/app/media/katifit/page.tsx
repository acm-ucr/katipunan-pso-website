import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import KatifitGrid from "@/components/media/KatifitGrid";

const Katifit = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIFITS" />
      <KatifitGrid />
    </>
  );
};

export default Katifit;
