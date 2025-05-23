import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import PACN from "@/components/culture/PACN";

const Pacn = () => {
  return (
    <div className="relative overflow-hidden">
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="PILIPINO-AMERICAN CULTURE NIGHT (PACN)"
      />
      <PACN />
    </div>
  );
};

export default Pacn;
