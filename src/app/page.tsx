// import Example from "@/components/Example";
import Landing from "@/components/home/Landing";
import Quote from "@/components/Quote";
import Mission from "@/components/home/Mission";
import Pillars from "@/components/home/Pillars";

const Home = () => {
  return (
    <>
      {/* <Example text1="Adjust" text2="these" text3="Props" /> */}
      <Landing />
      <Quote
        Phrase="Kataastaasang, Kagalanggalangang webppunan ng mga Anak ng Bayan"
        Source="Andrés Bonifacio  |  Est. 1892"
      />
      <Mission />
      <Pillars />
    </>
  );
};

export default Home;
