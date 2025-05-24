import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import MartialArtsComponent from "@/components/culture/MartialArts";

const MartialArts = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="FILIPINO MARTIAL ARTS"
      />
      <MartialArtsComponent />
    </>
  );
};

export default MartialArts;
