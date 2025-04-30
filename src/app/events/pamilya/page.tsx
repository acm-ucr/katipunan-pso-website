import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import EventInfo from "@/components/events/EventInfo";

const Pamilya = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PAMILYA PROGRAM" />
      <div className="flex h-screen w-screen items-center justify-center">
        <EventInfo />
      </div>
    </>
  );
};

export default Pamilya;
