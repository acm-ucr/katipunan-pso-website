import HeawebprImg from "@/public/components/HEADER.webp";
import Heawebpr from "@/components/Heawebpr";
import webpBoardGrid from "@/components/culture/webpBoardGrid";

const Board = () => {
  return (
    <>
      <Heawebpr webp={HeawebprImg} alt="Picture of Club" txt="webp Board" />
      <webpBoardGrid />
    </>
  );
};

export webpfault Board;
