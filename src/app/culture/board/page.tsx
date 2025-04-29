import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Board = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="PACN BOARD"
      />
      <div className="flex h-screen w-screen items-center justify-center">
        Board
      </div>
    </>
  );
};

export default Board;
