import React from "react";
import BoardCard from "@/components/about/BoardCard";
import { cabData } from "@/data/Cab";
import Image from "next/image";

const BoardGrid = () => {
  const cabinetMembers = cabData.filter((member) => !member.is_apprentice);
  const apprentices = cabData.filter((member) => member.is_apprentice);

  return (
    <div className="relative flex w-full overflow-x-hidden overflow-y-hidden px-6 py-16">
      <div className="absolute top-0 -left-50 z-0 -translate-x-1 scale-125 rotate-[270deg]">
        <Image
          src="/floral/blackflower.webp"
          alt="Decorative Flow"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute -right-90 bottom-0 z-0 -translate-x-1 scale-125 rotate-[270deg]">
        <Image
          src="/floral/blackdualflowers.webp"
          alt="Side Flower"
          width={800}
          height={800}
        />
      </div>

      <div className="w-full flex-col">
        <div className="relative mb-10">
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

        {apprentices.length > 0 && (
          <div className="mt-50 mb-20 w-full">
            <h2 className="font-inria-serif relative mb-70 text-center text-6xl">
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
