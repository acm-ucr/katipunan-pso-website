import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Pacn = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="PILIPINO-AMERICAN CULTURE NIGHT
(PACN)"
      />
      <div className="flex h-screen w-screen items-center justify-center">
        PACN
      </div>
    </>
  );
};

export default Pacn;
