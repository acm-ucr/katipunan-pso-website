import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type photoProps = {
  webp: StaticImport;
  alt: string;
  txt: string;
};

const Header = ({ webp, alt, txt }: photoProps) => {
  return (
    <div className="relative h-96 w-full">
      <Image src={webp} alt={alt} fill={true} className="object-cover" />

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-gray-100 opacity-81"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-inria-serif text-6xl tracking-wide text-white">
          {txt}
        </h1>
      </div>
    </div>
  );
};

export default Header;
