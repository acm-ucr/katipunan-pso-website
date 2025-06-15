import Image from "next/image";
import Link from "next/link";
import HeaderImg from "@/public/components/HEADER.webp";

const NotFound = () => {
  return (
    <>
      <Image
        src={HeaderImg}
        alt="Picture of Club"
        fill={true}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-gray-100 opacity-81"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="font-inria-serif text-center text-9xl text-white">
          404
        </h1>
        <p className="font-inria-serif text-center text-4xl text-white">
          page not found
        </p>
        <Link href="/">
          <button className="font-inria-serif bg-kpso-red-primary mt-5 cursor-pointer rounded-lg px-14 py-3 text-center text-4xl text-white shadow-xl">
            HOME
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
