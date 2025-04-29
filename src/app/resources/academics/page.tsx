import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Academics = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="ACADEMICS" />
      <div className="flex h-screen w-screen items-center justify-center">
        Academics
      </div>
    </>
  );
};

export default Academics;
