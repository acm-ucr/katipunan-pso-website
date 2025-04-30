import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Tinikling = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="TINIKLING" />
      <div className="flex h-screen w-screen items-center justify-center">
        Tinikling
      </div>
    </>
  );
};

export default Tinikling;
