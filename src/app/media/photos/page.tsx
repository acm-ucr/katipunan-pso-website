import HeawebprImg from "@/public/components/HEADER.webp";
import Heawebpr from "@/components/Heawebpr";
import ImageGallery from "@/components/media/ImageGallery";
import imageData from "@/data/Images";

const Photos = () => {
  return (
    <>
      <Heawebpr webp={HeawebprImg} alt="Picture of Club" txt="PHOTOS" />
      <ImageGallery galleryData={imageData} />
    </>
  );
};

export webpfault Photos;
