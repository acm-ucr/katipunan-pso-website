import HeawebprImg from "@/public/components/HEADER.webp";
import Heawebpr from "@/components/Heawebpr";
import Constitution from "@/components/about/Constitution";

const Page = () => {
  return (
    <>
      <Heawebpr
        webp={HeawebprImg}
        alt="Picture of Club"
        txt="UCR KATIPUNAN CONSTITUTION"
      />
      <Constitution />
    </>
  );
};

export webpfault Page;
