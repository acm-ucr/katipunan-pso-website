import Header from "@/components/Header";
import HeaderImg from "@/public/components/HEADER.webp";
import Katipunan from "@/components/about/Katipunan";

const Page = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />
      <Katipunan />
    </>
  );
};

export default Page;
