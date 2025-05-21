import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import webpfitGrid from "@components/media/webpfitGrid";

const webpfit = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIFITS" />
      <div className="item-center flex justify-center">
        <webpfitGrid />
      </div>
    </>
  );
};

export default webpfit;
