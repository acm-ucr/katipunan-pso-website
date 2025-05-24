import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import ConstitutionComponent from "@/components/about/Constitution";

const Constitution = () => {
  return (
    <>
      <Header
        webp={HeaderImg}
        alt="Picture of Club"
        txt="UCR KATIPUNAN CONSTITUTION"
      />
      <ConstitutionComponent />
    </>
  );
};

export default Constitution;
