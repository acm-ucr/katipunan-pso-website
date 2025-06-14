import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Pamaypay from "@/components/culture/Pamaypay";

const Page = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="PAMAYPAY" />
      <Pamaypay />
    </>
  );
};

export default Page;
