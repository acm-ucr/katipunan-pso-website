import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Tinikling from "@/components/culture/Tinikling";

const Page = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="TINIKLING" />
      <Tinikling />
    </>
  );
};

export default Page;
