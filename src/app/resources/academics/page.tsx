import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Academics from "@/components/resources/Academics";

const Page = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="ACADEMICS" />
      <Academics />
    </>
  );
};

export default Page;
