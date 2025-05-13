import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import EventInfo from "@/components/events/EventInfo";
import Contact from "@/components/events/Contact";
import PamGrid from "@/components/events/PamGrid";
import Image from "next/image";
import PAMBig from "@/public/pam/PAM_big.webp";

const Pamilya = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PAMILYA PROGRAM" />
      <div>
        <PamGrid />
        <EventInfo />
        <div className="mt-30 flex w-full justify-center">
          <Image src={PAMBig} alt="Big PAM Image" height={480} width={850} />
        </div>
        <Contact
          name="ucrkatipunan.sc"
          instagramLink="https://www.instagram.com/ucrkatipunan.sc/"
        />
      </div>
    </>
  );
};

export default Pamilya;
