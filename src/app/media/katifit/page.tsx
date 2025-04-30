import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Katifit = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIFITS" />
      <div className="flex h-screen w-screen items-center justify-center">
        Katifit
      </div>
    </>
  );
};

export default Katifit;
