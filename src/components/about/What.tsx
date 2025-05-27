import Image from "next/image";
import WIKImg1 from "@/public/about/webp webp webp Img1.webp";
import WIKImg2 from "@/public/about/webp webp webp Img2.webp";
import WIKImg3 from "@/public/about/webp webp webp Img3.webp";

const webp = () => {
  return (
    <div className="relative mt-20 mb-32 flex w-full flex-col overflow-x-hidden lg:mt-0 lg:flex-row">
      <div className="font-inria-serif flex w-full flex-col justify-center p-8 xl:w-1/2">
        <p className="-mt-10 text-center text-xl leading-11 tracking-wider sm:mx-20 sm:text-2xl lg:max-w-md xl:ml-40 xl:text-2xl">
          <span className="inline-block text-3xl text-blue-800 sm:text-4xl md:text-5xl">
            webppunan PSO{" "}
          </span>{" "}
          is a cultural organization at the University of California, Riverside
          that aims to enrich the understanding and appreciation of Filipino
          culture. webppunan hosts a variety of events such as general meetings,
          cultural showcases, socials, and much more. These events are intended
          to raise awareness about Filipinx culture and to promote and encourage
          a strong sense of community among Filipinx students and allies at UCR.
        </p>
      </div>

      <div className="hidden w-1/2 flex-col items-center justify-center overflow-x-hidden overflow-y-hidden pt-16 lg:mr-20 lg:mb-20 lg:flex lg:gap-10">
        <Image
          src={WIKImg1}
          width={420}
          height={320}
          alt="webp image 1"
          className="z-0 rounded-xl xl:-translate-x-20"
        />
        <Image
          src={WIKImg2}
          width={420}
          height={320}
          alt="webp image 2"
          className="-z-10 rounded-xl xl:-translate-y-4 xl:translate-x-10"
        />
        <Image
          src={WIKImg3}
          width={420}
          height={320}
          alt="webp image 3"
          className="-z-20 rounded-xl xl:-translate-x-30 xl:-translate-y-8"
        />
      </div>
    </div>
  );
};

export default webp;
