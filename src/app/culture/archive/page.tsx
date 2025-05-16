import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import PACNArchive from "@/components/culture/PACNArchive";

const Archive = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PACN ARCHIVE" />
      <PACNArchive />
    </>
  );
};

export default Archive;
