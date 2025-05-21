import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Subscribe from "@/components/media/Subscribe";

const Katifit = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIFITS" />
      <div className="flex h-screen w-screen items-center justify-center">
        Katifit
      </div>
      <div>
        <Subscribe NewsLink="https://www.google.com/" />
      </div>
    </>
  );
};

export default Katifit;
