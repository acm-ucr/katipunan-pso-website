import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Photos = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PHOTOS" />
      <div className="flex h-screen w-screen items-center justify-center">
        Photos
      </div>
    </>
  );
};

export default Photos;
