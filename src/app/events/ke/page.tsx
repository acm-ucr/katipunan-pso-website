import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";
import Contact from "@/components/events/Contact";

const Ke = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="Katipunan Experience (KE)"
      />
      <div>
        <Contact
          name="ucrkatipunanoutreach"
          instagramLink="https://www.instagram.com/ucrkatipunanoutreach/"
        />
      </div>
    </>
  );
};

export default Ke;
