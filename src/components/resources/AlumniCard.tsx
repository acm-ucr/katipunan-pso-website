import Image from "next/image";
import Link from "next/link";

import { StaticImageData } from "next/image";

interface AlumniCardProps {
  fullName: string;
  gradClass: string;
  readMoreLink: string;
  image: StaticImageData;
}

const AlumniCard = ({
  fullName,
  gradClass,
  readMoreLink,
  image,
}: AlumniCardProps) => {
  return (
    <div className="flex h-127 w-sm flex-col justify-center border-4 border-blue-800">
      <div className="flex h-100 w-sm justify-center border-4 border-amber-500">
        <Image
          src={image}
          alt="Photo of alumni"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
      <div className="w-sx flex h-9 flex-col justify-center border-green-800">
        <div className="font-inria-serif border-4 text-center text-3xl">
          {fullName}
        </div>
      </div>
      <div className="mx-auto flex h-5 w-40 justify-center">
        <div className="font-inria-serif text-center text-lg">{gradClass}</div>
      </div>
      <div className="bg-kpso-blue font-inria-serif mx-auto mt-2 flex h-7 w-26 flex-col justify-center rounded-xl">
        <Link href={readMoreLink} className="text-center text-white">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AlumniCard;
