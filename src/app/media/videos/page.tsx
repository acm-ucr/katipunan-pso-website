import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import VideoGallery from "@/components/media/VideoGallery";
import videoData from "@/data/Videos";

const Videos = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="VIDEOS" />
      <VideoGallery galleryData={videoData} />
    </>
  );
};

export default Videos;
