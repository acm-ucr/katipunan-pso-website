import Image from "next/image";
import vine from "@/public/floral/orangelongvine.svg";
import schedule from "@/public/orangebackground.svg";

const Chartutor = () => {
  return (
    <div className="font-inria-serif mx-auto flex h-auto w-[60%] flex-col items-center pb-10">
      <div className="text-kpso-red-primary mt-15 text-5xl">CHARTUTOR</div>
      <div className="">
        <Image
          src={vine}
          alt="Vine"
          className="text-kpso-red-primary w-170 pt-5"
        />
      </div>
      <div className="flex flex-row gap-50 self-start pt-5 2xl:gap-100">
        <div className="flex flex-col">
          <div className="text-kpso-red-primary text-3xl">WHEN?</div>
          <ul className="ml-7 list-disc pt-7 text-xl">
            <li>Refer to the schedule below</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="text-kpso-red-primary text-3xl">WHERE?</div>
          <ul className="list-disc pt-7 pl-8 text-xl">
            <li>Refer to the schedule below</li>
          </ul>
        </div>
      </div>
      <div className="text-kpso-red-primary self-start pt-7 text-3xl">WHY?</div>
      <ul className="ml-7 list-disc self-start pt-7 text-xl leading-10">
        <li>
          Why not? Study with your friends, meet new people, enjoy baked goods,
          and possibly become this week's{" "}
          <span className="text-kpso-red-primary">KatiKrush</span>!
        </li>
      </ul>
      <div>
        <Image src={schedule} alt="schedule" className="w-auto pt-10" />
      </div>
    </div>
  );
};

export default Chartutor;
