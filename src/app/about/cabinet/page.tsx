import HeaderImg from "@/public/HEADER.webp";
import Header from "@/components/Header";

const Cabinet = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="MEET THE CABINET"
      />
      <div className="flex h-screen w-screen items-center justify-center">
        Cabinet
      </div>
    </>
  );
};

export default Cabinet;
