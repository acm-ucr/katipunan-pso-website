import React from "react";
import BoardCard from "@/components/about/BoardCard";
import { cabData } from "@/data/Cab";
import Image from "next/image";

const BoardGrid = () => {
  // Filter members into cabinet members and apprentices
  const cabinetMembers = cabData.filter((member) => !member.is_apprentice);
  const apprentices = cabData.filter((member) => member.is_apprentice);

  return (
    <div className="mx-auto flex w-full max-w-7xl px-6 py-16">
      {/* Decorative black flower (top-left corner) */}
      <div className="absolute top-0 left-0 z-0 flex -translate-x-1 scale-125 rotate-[270deg] items-start justify-start">
        <Image
          src="/floral/blackflower.webp"
          alt="Decorative Flow"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute top-1/2 -right-5 z-10 mx-auto flex scale-500 -rotate-30 transform justify-center lg:block">
        <Image
          src="/floral/blackdualflowers.webp"
          alt="Side Flower"
          width={160}
          height={160}
        />
      </div>

      {/* Main content section (for both grids) */}
      <div className="w-full flex-col">
        {/* Cabinet Members Section */}
        <div className="relative mb-10">
          {/* Decorative flower on right side, vertically centered */}

          {/* Cabinet Grid */}
          <div className="mt-20 grid grid-cols-1 place-items-center gap-y-6 md:grid-cols-2 md:gap-x-0 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-50">
            {cabinetMembers.map((member, index) => (
              <BoardCard
                key={index}
                position={member.position}
                name={member.name}
                webp={member.webp}
                is_apprentice={member.is_apprentice}
              />
            ))}
          </div>
        </div>

        {/* Apprentices Section */}
        {apprentices.length > 0 && (
          <div className="mt-50 mb-20 w-full">
            <h2 className="font-inria-serif relative mb-70 text-center text-8xl font-bold">
              APPRENTICES
              <Image
                src="/floral/longvine.svg"
                alt="Vine"
                className="absolute -bottom-20 left-1/2 w-200 -translate-x-1/2 transform object-center"
                width={200}
                height={40}
              />
            </h2>

            <div className="mt-20 grid grid-cols-1 place-items-center gap-y-6 md:grid-cols-2 md:gap-x-0 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-50">
              {apprentices.map((member, index) => (
                <BoardCard
                  key={index}
                  position={member.position}
                  name={member.name}
                  webp={member.webp}
                  is_apprentice={member.is_apprentice}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardGrid;
