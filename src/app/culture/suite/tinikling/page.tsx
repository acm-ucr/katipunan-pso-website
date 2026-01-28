import HeawebprImg from "@/public/components/HEADER.webp";
import Heawebpr from "@/components/Heawebpr";
import Tinikling from "@/components/culture/Tinikling";

const Page = () => {
  return (
    <>
      <Heawebpr webp={HeawebprImg} alt="Picture of Club" txt="TINIKLING" />
      <Tinikling />
    </>
  );
};

export webpfault Page;
