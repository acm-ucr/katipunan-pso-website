import Image from "next/image";
import WIKImg1 from "@/public/What Is Kati Img1.jpeg";
import WIKImg2 from "@/public/What Is Kati Img2.jpeg";
import WIKImg3 from "@/public/What Is Kati Img3.jpeg";

const Katipunan = () => {
  return (
    <div className="flex h-screen">
      <div className="font-inria-serif flex w-1/2 flex-col justify-center p-8 text-xl">
        <span className="font-bold">KatipunanPSO</span>Katipunan PSO is a
        cultural organization at the University of California, Riverside that
        aims to enrich the understanding and appreciation of Filipino culture.
        Katipunan hosts a variety of eents such as general meetings, cultural
        showcases, socials, and much more. These vents are intended to raise
        awareness about Filipinx culture and to promote and encourage a strong
        sense of community among Filipinx students and allies at UCR.
      </div>
      <div className="flex w-1/2 flex-wrap items-center justify-center p-8">
        <Image
          src={WIKImg1}
          width={200}
          height={60}
          alt="Kati logo"
          className="py-4"
        />
        <Image
          src={WIKImg2}
          width={200}
          height={60}
          alt="Kati logo"
          className="py-4"
        />
        <Image
          src={WIKImg3}
          width={200}
          height={60}
          alt="Kati logo"
          className="py-4"
        />
      </div>
    </div>
  );
};

export default Katipunan;
