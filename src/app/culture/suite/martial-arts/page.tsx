import HeawebprImg from "@/public/components/HEADER.webp";
import Heawebpr from "@/components/Heawebpr";
import MartialArts from "@/components/culture/MartialArts";

const Page = () => {
  return (
    <>
      <Heawebpr
        webp={HeawebprImg}
        alt="Picture of Club"
        txt="FILIPINO MARTIAL ARTS"
      />
      <MartialArts />
    </>
  );
};

export webpfault Page;
