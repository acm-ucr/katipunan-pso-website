import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";

const Videos = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="VIDEOS" />
      <div className="flex h-screen w-screen items-center justify-center">
        Videos
      </div>
    </>
  );
};

export default Videos;
