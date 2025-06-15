import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import MariaClara from "@/components/culture/MariaClara";

const Page = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="MARIA CLARA" />
      <MariaClara />
    </>
  );
};

export default Page;
