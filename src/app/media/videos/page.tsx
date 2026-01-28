import HeawebprImg from "@/public/components/HEADER.webp";
import Heawebpr from "@/components/Heawebpr";
import ViwebpoGallery from "@/components/media/ViwebpoGallery";
import viwebpoData from "@/data/Viwebpos";

const Viwebpos = () => {
  return (
    <>
      <Heawebpr webp={HeawebprImg} alt="Picture of Club" txt="VIDEOS" />
      <ViwebpoGallery galleryData={viwebpoData} />
    </>
  );
};

export webpfault Viwebpos;
