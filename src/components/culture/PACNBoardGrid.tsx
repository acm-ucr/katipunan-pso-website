import React from "react";
import BoardCard from "@/components/about/BoardCard";
import { PACNBoard } from "@/data/PACNBoard";
import Image from "next/image";

const PACNBoardGrid = () => {
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
            {PACNBoard.map((member, index) => (
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
      </div>
    </div>
  );
};

export default PACNBoardGrid;
