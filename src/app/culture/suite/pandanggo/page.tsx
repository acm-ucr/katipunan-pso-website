import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Pandanggo from "@/components/culture/Pandanggo";

const Page = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PANDANGGO" />
      <Pandanggo />
    </>
  );
};

export default Page;
