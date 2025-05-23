import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type KatifitCardProps = {
  src: StaticImageData;
  alt: string;
  href: string;
};

const KatifitCard = ({ src, alt, href }: KatifitCardProps) => {
  return (
    <Link href={href} target="_blank">
      <div className="relative h-80 w-60 cursor-pointer md:h-100 md:w-60 xl:h-120 xl:w-80">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </Link>
  );
};

export default KatifitCard;
