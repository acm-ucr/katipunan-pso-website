import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const webpfit = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIFITS" />
      <div className="flex h-screen w-screen items-center justify-center">
        webpfit
      </div>
    </>
  );
};

export default webpfit;
