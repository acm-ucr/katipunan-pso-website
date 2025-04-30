import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Modern = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="MODERN" />
      <div className="flex h-screen w-screen items-center justify-center">
        Modern
      </div>
    </>
  );
};

export default Modern;
