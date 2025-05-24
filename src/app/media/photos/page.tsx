import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import ImageGallery from "@/components/media/ImageGallery";
import imageData from "@/data/Images";

const Photos = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PHOTOS" />
      <ImageGallery galleryData={imageData} />
    </>
  );
};

export default Photos;
