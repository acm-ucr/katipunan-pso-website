import Image from "next/image";
import vine from "@/public/floral/orangelongvine.svg";
import Schedule from "@/public/resources/ChartutorFall2024.webp";

const Chartutor = () => {
  return (
    <div className="font-inria-serif mx-20 flex h-auto flex-col items-center overflow-x-hidden pb-10 xl:mx-auto xl:w-[60%]">
      <div className="text-kpso-red-primary mt-15 text-4xl md:text-5xl">
        CHARTUTOR
      </div>
      <div className="">
        <Image
          src={vine}
          alt="Vine"
          className="text-kpso-red-primary w-170 pt-5"
        />
      </div>
      <div className="flex flex-row self-start pt-5 md:mx-10 md:gap-50 xl:mx-0 2xl:gap-100">
        <div className="flex flex-col">
          <div className="text-kpso-red-primary text-center text-xl md:text-left md:text-3xl">
            WHEN?
          </div>
          <ul className="text-md ml-7 list-disc pt-2 md:text-xl xl:pt-7">
            <li>Refer to the schedule below</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="text-kpso-red-primary text-center text-xl md:text-left md:text-3xl">
            WHERE?
          </div>
          <ul className="text-md list-disc pt-2 pl-8 md:text-xl xl:pt-7">
            <li>Refer to the schedule below</li>
          </ul>
        </div>
      </div>
      <div className="text-kpso-red-primary self-start pt-7 text-center text-xl md:mx-10 md:text-left md:text-3xl xl:mx-0">
        WHY?
      </div>
      <ul className="text-md list-disc self-start pt-2 leading-10 md:mx-17 md:text-xl xl:ml-7 xl:pt-7">
        <li>
          Why not? Study with your friends, meet new people, enjoy baked goods,
          and possibly become this week's{" "}
          <span className="text-kpso-red-primary">KatiKrush</span>!
        </li>
      </ul>
      <div>
        <Image src={Schedule} alt="schedule" className="w-auto pt-10" />
      </div>
    </div>
  );
};

export default Chartutor;
