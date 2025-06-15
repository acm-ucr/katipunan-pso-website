import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import Constitution from "@/components/about/Constitution";

const Page = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="UCR KATIPUNAN CONSTITUTION"
      />
      <Constitution />
    </>
  );
};

export default Page;
