import { tags } from "@/data/suite";
import Image from "next/image";

const Suite = () => {
  return (
    <div className="relative left-82 grid w-1/2 grid-cols-3 gap-8 space-y-10 py-20">
      {tags.map(({ name, image }, index) => (
        <div
          key={index}
          className="relative h-50 border-6 border-white text-3xl text-white"
        >
          <div className="absolute inset-0 z-0 bg-cover bg-center" />

          <div className="absolute inset-0 z-10 bg-blue-800 opacity-70" />

          <div className="font-inria-serif relative z-20 flex h-full flex-col items-center justify-center text-center">
            {name.split(" ").map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
          <Image src={image} alt="Image" fill />
        </div>
      ))}
    </div>
  );
};

export default Suite;
