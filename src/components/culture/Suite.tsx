import { tags } from "@/data/suite";
import Image from "next/image";
import Link from "next/link";

const Suite = () => {
  return (
    <div className="mt-20 grid grid-cols-3 gap-32">
      {tags.map(({ name, image, link }, index) => (
        <Link href={link} key={index}>
          <div
            key={index}
            className="relative h-88 w-88 border-6 border-white text-3xl text-white"
          >
            <div className="absolute inset-0 z-10 bg-blue-900 opacity-70" />

            <div className="font-inria-serif relative z-20 flex h-full flex-col items-center justify-center text-center text-5xl">
              {name.split(" ").map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </div>
            <Image src={image} alt="Image" fill />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Suite;
