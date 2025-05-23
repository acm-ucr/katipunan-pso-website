import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import ImageGallery from "@/components/media/ImageGallery";
import imageData from "@/data/Images";

const Photos = () => {
  return (
    <div className="w-full">
      <Header webp={HeaderImg} alt="Picture of Club" txt="PHOTOS" />
      <ImageGallery galleryData={imageData} />
    </div>
  );
};

export default Photos;
