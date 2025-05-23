import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import MariaClaraComponent from "@/components/culture/MariaClara";

const MariaClara = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="MARIA CLARA" />
      <MariaClaraComponent />
    </>
  );
};

export default MariaClara;
