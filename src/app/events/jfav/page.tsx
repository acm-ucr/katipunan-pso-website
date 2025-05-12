import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import Contact from "@/components/events/Contact";
import OrangeBackground from "@/public/orangebackground.svg";
import Image from "next/image";
import Quote from "@/components/Quote";

const Jfav = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Header
          webp={HeaderImg}
          alt="Picture of Club"
          txt="Justice for Filipino American Veterans (JFAV)"
        />
        <Image
          src={OrangeBackground}
          alt="Mock Image"
          width={852}
          height={479}
          className="z-10 mx-auto my-40"
        />

        <Quote
          Phrase="We want to keep the torch alive."
          Source="Arturo Garcia"
        />
        <p className="font-inria-serif mx-60 mt-40 text-center text-2xl">
          JFAV is a national alliance of Filipino veterans organizations and
          other advocates — the march is meant to serve as a reminder to ensure
          the sacrifices made by Filipinos during World War II aren't forgotten.
        </p>
        <Contact
          name="jfav_la"
          instagramLink="https://www.instagram.com/jfav_la/"
        />
      </div>
    </>
  );
};

export default Jfav;
