import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Subscribe from "@/components/media/Subscribe";

const Katiweekly = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="KATIWEEKLY" />
      <Subscribe NewsLink="https://ucrkatipunan.us3.list-manage.com/subscribe?u=1b1edf627c5dde74f4c4c4489&id=7ca3f7f5ee" />
    </>
  );
};

export default Katiweekly;
