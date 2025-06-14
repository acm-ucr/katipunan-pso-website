import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Modern from "@/components/culture/Modern";

const Page = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="MODERN" />
      <Modern />
    </>
  );
};

export default Page;
