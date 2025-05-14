import Image from "next/image";
import vine from "@/public/floral/orangelongvine.svg";
import Link from "next/link";

const AcademicResources = () => {
  return (
    <div className="font-inria-serif mx-20 flex h-auto flex-col items-center overflow-x-hidden pb-10 xl:mx-auto xl:w-[60%]">
      <div className="text-kpso-red-primary mt-15 text-center text-4xl md:text-5xl">
        Academic Resources
      </div>
      <div className="">
        <Image
          src={vine}
          alt="Vine"
          className="text-kpso-red-primary w-170 pt-5"
        />
        <div className="mt-5 flex justify-between xl:mt-20">
          <p className="text-md text-center underline underline-offset-2 md:text-2xl xl:ml-10">
            <Link
              href="https://docs.google.com/document/d/17v4ZdDqVcdK_ZGKPc7n4e4FOjMcHFBnJ9yMUBY1xWxM/edit?tab=t.0"
              target="_blank"
            >
              Career Building Resources
            </Link>
          </p>
          <p className="text-md text-center underline underline-offset-2 md:text-2xl xl:mr-10">
            <Link
              href="https://docs.google.com/document/d/1pCSChoLsAphWCwMbpiMup-CmsBSJh-9nuGcsRctFz_U/edit?tab=t.0"
              target="_blank"
            >
              ARC Resources
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicResources;
