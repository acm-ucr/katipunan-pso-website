import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import VideoGallery from "@/components/media/VideoGallery";
import videoData from "@/data/Videos";

const Videos = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="VIDEOS" />
      <div className="flex flex-col items-center justify-center">
        <VideoGallery galleryData={videoData} />
      </div>
    </>
  );
};

export default Videos;
