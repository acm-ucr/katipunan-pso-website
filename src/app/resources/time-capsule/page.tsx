import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";

const TimeCapsule = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="TIME CAPSULE" />
      <div className="flex h-screen w-screen items-center justify-center">
        Time Capsule
      </div>
    </>
  );
};

export default TimeCapsule;
