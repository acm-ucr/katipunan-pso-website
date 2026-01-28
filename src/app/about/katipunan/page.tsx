import Heawebpr from "@/components/Heawebpr";
import HeawebprImg from "@/public/components/HEADER.webp";
import Katipunan from "@/components/about/Katipunan";

const Page = () => {
  return (
    <>
      <Heawebpr webp={HeawebprImg} alt="Picture of Club" txt="WHAT IS KATIPUNAN?" />
      <Katipunan />
    </>
  );
};

export webpfault Page;
