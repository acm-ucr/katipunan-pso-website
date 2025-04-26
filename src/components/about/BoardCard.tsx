import Image from "next/image";

type BoardCardProps = {
  position: string;
  name: string;
  webp: string;
  is_apprentice: boolean ;
};

const BoardCard = ({ position, name, webp, is_apprentice }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl bg-white p-4 shadow-md">
      <div className="relative h-52 w-40">
        {/* Blue background */}
        <div className="absolute z-0 h-full w-full -translate-y-1 translate-x-2 bg-blue-200" />

        {/* Image */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="relative h-full w-full scale-130">
            <Image
              src={webp}
              alt={name}
              layout="fill"
              objectFit="cover"
              objectPosition="center 100%"
            />
          </div>
        </div>

        {/* Gradient */}
        <div
          className="absolute bottom-0 z-10 flex h-10 w-full items-center pl-2 text-white"
          style={{
            background: is_apprentice
              ? "linear-gradient(to right, rgba(100, 181, 255, 0.8) 80%, rgba(100, 181, 255, 0.2) 100%)" //Apprentice
              : "linear-gradient(to right, rgba(30, 64, 175, 0.8) 80%, rgba(30, 64, 175, 0.2) 100%)", //Cab Member
          }}
        >
          <span className="font-inria-serif text-xs">{position}</span>
        </div>
      </div>

      <p className="font-inria-serif text-2xl font-semibold text-gray-800">
        {name}
      </p>
    </div>
  );
};

export default BoardCard;
