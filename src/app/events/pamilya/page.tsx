import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import PAM from "@/components/events/PAM";

const Pamilya = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PAMILYA PROGRAM" />
      <PAM />
    </>
  );
};

export default Pamilya;
