import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import JFAV from "@/components/events/JFAV";

const Jfav = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="Justice for Filipino American Veterans (JFAV)"
      />
      <JFAV />
    </>
  );
};

export default Jfav;
