import Image from "next/image";
import WIKImg1 from "@/public/What Is Kati Img1.jpeg";
import WIKImg2 from "@/public/What Is Kati Img2.jpeg";
import WIKImg3 from "@/public/What Is Kati Img3.jpeg";

const What = () => {
  return (
    <div className="flex sm:h-1/2 lg:h-screen">
      <div className="font-inria-serif relative flex w-1/2 flex-col justify-center p-8 text-xl">
        <p className="mx-20 -mt-10 text-center text-lg leading-11 tracking-wider lg:ml-40 lg:text-2xl">
          <span className="inline-block text-xl text-blue-800 lg:text-5xl">
            Katipunan PSO{" "}
          </span>{" "}
          is a cultural organization at the University of California, Riverside
          that aims to enrich the understanding and appreciation of Filipino
          culture. Katipunan hosts a variety of events such as general meetings,
          cultural showcases, socials, and much more. These events are intended
          to raise awareness about Filipinx culture and to promote and encourage
          a strong sense of community among Filipinx students and allies at UCR.
        </p>
      </div>
      <div className="relative flex w-1/2 flex-col items-center justify-center pt-16">
        <Image
          src={WIKImg1}
          width={420}
          height={320}
          alt="Kati logo"
          className="z-0 -translate-x-40 rounded-xl"
        />
        <Image
          src={WIKImg2}
          alt="Kati logo"
          height={320}
          className="-z-10 -translate-y-4 translate-x-10 rounded-xl sm:w-100"
        />
        <Image
          src={WIKImg3}
          width={420}
          height={320}
          alt="Kati logo"
          className="-z-20 -translate-x-30 -translate-y-8 rounded-xl"
        />
      </div>
    </div>
  );
};

export default What;
