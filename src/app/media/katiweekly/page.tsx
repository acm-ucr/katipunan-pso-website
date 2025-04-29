import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Katiweekly = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIWEEKLY" />
      <div className="flex h-screen w-screen items-center justify-center">
      Kati Weekly
      </div>
    </>
  );
};

export default Katiweekly;
