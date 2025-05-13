import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import BoardGrid from "@/components/about/BoardGrid";

const Cabinet = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="MEET THE CABINET" />
      <BoardGrid />
    </>
  );
};

export default Cabinet;
