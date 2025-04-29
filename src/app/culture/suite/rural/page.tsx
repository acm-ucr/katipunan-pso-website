import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Rural = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="RURAL" />
      <div className="flex h-screen w-screen items-center justify-center">
        Rural
      </div>
    </>
  );
};

export default Rural;
