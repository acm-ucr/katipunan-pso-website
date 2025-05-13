import Image from "next/image";

type BoardCardProps = {
  position: string;
  name: string;
  webp: string;
  is_apprentice: boolean;
};

const BoardCard = ({ position, name, webp, is_apprentice }: BoardCardProps) => {
  return (
    <div className="flex scale-170 flex-col items-center overflow-hidden rounded-xl p-6">
      <div className="relative h-64 w-48">
        {/* Blue background with sharp edges */}
        <div
          className="absolute z-0 h-full w-full -translate-y-1 translate-x-2"
          style={{ backgroundColor: "#9ab4d6" }}
        />

        {/* Image */}
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

        {/* Gradient Label */}
        <div
          className="absolute bottom-0 z-20 flex h-10 w-full items-center pl-2 text-white"
          style={{
            background: is_apprentice
              ? "linear-gradient(to right, rgba(154, 180, 214, 0.8) 80%, rgba(100, 181, 255, 0.2) 100%)"
              : "linear-gradient(to right, rgba(30, 64, 175, 0.8) 80%, rgba(30, 64, 175, 0.2) 100%)",
          }}
        >
          <span className="font-inria-serif text-xs">{position}</span>
        </div>
      </div>

      <p className="font-inria-serif mt-1 text-2xl font-semibold text-gray-800">
        {name}
      </p>
    </div>
  );
};

export default BoardCard;
