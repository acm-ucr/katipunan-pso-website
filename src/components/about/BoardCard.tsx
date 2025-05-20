import Image, { StaticImageData } from "next/image";

type BoardCardProps = {
  position: string;
  name: string;
  webp: StaticImageData;
  is_apprentice: boolean;
};

const BoardCard = ({ position, name, webp, is_apprentice }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl p-6">
      <div className="relative h-56 w-40 sm:h-64 sm:w-48 md:h-72 md:w-52 lg:h-80 lg:w-56 xl:h-96 xl:w-64">
        <div
          className="absolute z-0 h-full w-full -translate-y-1 translate-x-2"
          style={{ backgroundColor: "#9ab4d6" }}
        />

        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src={webp}
              alt={name}
              layout="fill"
              objectFit="cover"
              objectPosition="center 100%"
            />
          </div>
        </div>

        <div
          className="absolute bottom-0 z-20 flex h-10 w-full items-center pl-2 text-white sm:h-15"
          style={{
            background: is_apprentice
              ? "linear-gradient(to right, rgba(154, 180, 214, 0.8) 80%, rgba(100, 181, 255, 0.2) 100%)"
              : "linear-gradient(to right, rgba(30, 64, 175, 0.8) 80%, rgba(30, 64, 175, 0.2) 100%)",
          }}
        >
          <span className="font-inria-serif text-xs sm:text-sm md:text-base lg:text-xl">
            {position}
          </span>
        </div>
      </div>

      <p className="font-inria-serif mt-2 text-lg text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">
        {name}
      </p>
    </div>
  );
};

export default BoardCard;
