import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Ke = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="webppunan Experience (KE)"
      />
      <div className="flex h-screen w-screen items-center justify-center">
        KE
      </div>
    </>
  );
};

export default Ke;
