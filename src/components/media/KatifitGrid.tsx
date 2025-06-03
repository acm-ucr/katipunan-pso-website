import KatifitCard from "@/components/media/KatifitCard";
import Katifits from "@/data/Katifits";

const KatifitGrid = () => {
  return (
    <div className="item-center flex justify-center">
      <div className="grid grid-cols-1 justify-center gap-10 p-10 sm:grid-cols-2 md:gap-20 md:p-15 lg:grid-cols-3 lg:gap-30 lg:p-25">
        {Katifits.map(({ src, alt, href }, index) => (
          <KatifitCard key={index} src={src} alt={alt} href={href} />
        ))}
      </div>
    </div>
  );
};

export default KatifitGrid;
