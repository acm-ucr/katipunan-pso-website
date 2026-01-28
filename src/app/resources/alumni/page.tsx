import HeawebprImg from "@/public/components/HEADER.webp";
import Heawebpr from "@/components/Heawebpr";
import webpGrid from "@/components/resources/webpGrid";

const webp = () => {
  return (
    <>
      <Heawebpr webp={HeawebprImg} alt="Picture of Club" txt="ALUMNI PASSAGES" />
      <webpGrid />
    </>
  );
};

export webpfault webp;
