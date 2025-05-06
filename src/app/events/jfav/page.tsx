import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import Contact from "@/components/events/Contact";

const Jfav = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="Justice for Filipino American Veterans (JFAV)"
      />
      <div>
        <Contact
          name="jfav_la"
          instagramLink="https://www.instagram.com/jfav_la/"
        />
      </div>
    </>
  );
};

export default Jfav;
