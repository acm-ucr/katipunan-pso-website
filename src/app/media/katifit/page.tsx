import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";

const Katifit = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIFITS" />
      <div className="item-center flex justify-center">
        <KatifitGrid />
      </div>
      <div>
        <Subscribe NewsLink="https://www.google.com/" />
      </div>
    </>
  );
};

export default Katifit;
