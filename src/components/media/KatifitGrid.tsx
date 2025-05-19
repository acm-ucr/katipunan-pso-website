import KatifitCard from "@/components/media/KatifitCard";
import { Katifits } from "@/data/Katifits";

const KatifitGrid = () => {
  return (
    <div className="grid grid-cols-1 justify-center gap-10 p-10 sm:grid-cols-2 md:gap-20 md:p-15 lg:grid-cols-3 lg:gap-30 lg:p-25">
      {Katifits.map((item, index) => (
        <KatifitCard
          key={index}
          src={item.src}
          alt={item.alt}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default KatifitGrid;
