import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import PACNBoardGrid from "@/components/culture/PACNBoardGrid";

const Board = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PACN Board" />
      <PACNBoardGrid />
    </>
  );
};

export default Board;
