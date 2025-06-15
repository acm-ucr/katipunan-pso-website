import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import MartialArts from "@/components/culture/MartialArts";

const Page = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="FILIPINO MARTIAL ARTS"
      />
      <MartialArts />
    </>
  );
};

export default Page;
