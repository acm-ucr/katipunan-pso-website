import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import BoardGrid from "@/components/about/BoardGrid";

const Board = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PACN Board" />
      <BoardGrid />
    </>
  );
};

export default Board;
