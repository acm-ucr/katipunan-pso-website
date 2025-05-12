import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const webpweekly = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIWEEKLY" />
      <div className="flex h-screen w-screen items-center justify-center">
        webp Weekly
      </div>
    </>
  );
};

export default webpweekly;
