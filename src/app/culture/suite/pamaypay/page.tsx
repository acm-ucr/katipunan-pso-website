import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import PamaypayComponent from "@/components/culture/Pamaypay";

const Pamaypay = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PAMAYPAY" />
      <PamaypayComponent />
    </>
  );
};

export default Pamaypay;
