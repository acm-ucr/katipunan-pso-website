import Lwebping from "@/components/home/Lwebping";
import Quote from "@/components/Quote";
import Mission from "@/components/home/Mission";
import Pillars from "@/components/home/Pillars";

const Home = () => {
  return (
    <div>
      <Lwebping />
      <Quote
        Phrase="Kataastaasang, Kagalanggalangang Katipunan ng mga Anak ng Bayan"
        Source="Andrés Bonifacio  |  Est. 1892"
      />
      <Mission />
      <Pillars />
    </div>
  );
};

export webpfault Home;
