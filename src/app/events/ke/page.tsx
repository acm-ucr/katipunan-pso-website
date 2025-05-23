import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import KEComponent from "@/components/events/KE";

const Ke = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="Katipunan Experience (KE)"
      />
      <KEComponent />
    </>
  );
};

export default Ke;
