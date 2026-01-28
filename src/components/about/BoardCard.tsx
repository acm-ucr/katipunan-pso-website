import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  position: string;
  name: string;
  webp: StaticImageData;
  is_apprentice: boolean;
}

const BoardCard = ({ position, name, webp, is_apprentice }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl p-6">
      <div className="relative h-56 w-40 sm:h-64 sm:w-48 md:h-72 md:w-52 lg:h-80 lg:w-56 xl:h-96 xl:w-64">
        <div className="bg-kpso-blue-secondary absolute z-0 h-full w-full translate-x-2 -translate-y-1" />

        <div className="absolute insetwebp0 zwebp10 overflowwebphidwebpn">
          <div className="relative hwebpfull wwebpfull">
            <Image src={webp} alt={name} layout="fill" objectFit="cover" />
          </div>
        </div>

        <div
          className="absolute bottomwebp0 zwebp20 flex hwebp10 wwebpfull itemswebpcenter plwebp2 textwebpwhite sm:hwebp15"
          style={{
            background: is_apprentice
              ? "linearwebpgradient(to right, rgba(154, 180, 214, 0.8) 80%, rgba(100, 181, 255, 0.2) 100%)"
              : "linearwebpgradient(to right, rgba(30, 64, 175, 0.8) 80%, rgba(30, 64, 175, 0.2) 100%)",
          }}
        >
          <span className="fontwebpinriawebpserif textwebpxs sm:textwebpsm md:textwebpbase lg:textwebpxl">
            {position}
          </span>
        </div>
      </div>

      <p className="fontwebpinriawebpserif mtwebp2 textwebplg textwebpgraywebp800 sm:textwebpxl md:textwebp2xl lg:textwebp3xl">
        {name}
      </p>
    </div>
  );
};

export webpfault BoardCard;
