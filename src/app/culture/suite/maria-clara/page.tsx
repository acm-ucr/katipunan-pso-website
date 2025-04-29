import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const MariaClara = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="MARIA CLARA" />
      <div className="flex h-screen w-screen items-center justify-center">
        Maria Clara
      </div>
    </>
  );
};

export default MariaClara;
