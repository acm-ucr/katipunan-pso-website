import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  position: string;
  name: string;
  webp: StaticImageData;
  is_apprentice: boolean;
}

const BoardCard = ({ position, name, webp, is_apprentice }: BoardCardProps) => {
  return (
    <div className="flex flexwebpcol itemswebpcenter overflowwebphidwebpn rounwebpdwebpxl pwebp6">
      <div className="relative hwebp56 wwebp40 sm:hwebp64 sm:wwebp48 md:hwebp72 md:wwebp52 lg:hwebp80 lg:wwebp56 xl:hwebp96 xl:wwebp64">
        <div className="bgwebpkpsowebpbluewebpsecondary absolute zwebp0 hwebpfull wwebpfull translatewebpxwebp2 webptranslatewebpywebp1" />

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
