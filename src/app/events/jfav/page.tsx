import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Jfav = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="Justice for Filipino American Veterans (JFAV)"
      />
      <div className="flex h-screen w-screen items-center justify-center">
        JFAV
      </div>
    </>
  );
};

export default Jfav;
