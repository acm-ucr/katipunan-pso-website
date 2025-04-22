import Image from "next/image";
import WIKImg1 from "@/public/webp webp webp Img1.webp";
import WIKImg2 from "@/public/webp webp webp Img2.webp";
import WIKImg3 from "@/public/webp webp webp Img3.webp";

const webp = () => {
  return (
    <div className="flex h-screen">
      <div className="font-inria-serif flex w-1/2 flex-col justify-center p-8 text-xl">
        <p className="-mt-10 ml-40 max-w-md text-center text-2xl leading-11 tracking-wider">
          <span className="inline-block text-5xl text-blue-800">
            webp PSO{" "}
          </span>{" "}
          is a cultural organization at the University of California, Riverside
          that aims to enrich the understanding and appreciation of Filipino
          culture. webp hosts a variety of events such as general meetings,
          cultural showcases, socials, and much more. These events are intended
          to raise awareness about Filipinx culture and to promote and encourage
          a strong sense of community among Filipinx students and allies at UCR.
        </p>
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center pt-16">
        <Image
          src={WIKImg1}
          width={420}
          height={320}
          alt="webp logo"
          className="z-0 -translate-x-40 rounded-xl"
        />
        <Image
          src={WIKImg2}
          width={420}
          height={320}
          alt="webp logo"
          className="-z-10 -translate-y-4 translate-x-10 rounded-xl"
        />
        <Image
          src={WIKImg3}
          width={420}
          height={320}
          alt="webp logo"
          className="-z-20 -translate-x-30 -translate-y-8 rounded-xl"
        />
      </div>
    </div>
  );
};

export default webp;
