import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import EventInfo from "@/components/events/EventInfo";
import Contact from "@/components/events/Contact";

const Pamilya = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PAMILYA PROGRAM" />
      <div>
        <EventInfo />
        <Contact
          name="ucrkatipunan.sc"
          instagramLink="https://www.instagram.com/ucrkatipunan.sc/"
        />
      </div>
    </>
  );
};

export default Pamilya;
