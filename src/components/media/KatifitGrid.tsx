import KatifitCard from "@/components/media/KatifitCard";
import Katifits from "@/data/Katifits";

const KatifitGrid = () => {
  return (
    <div className="itemwebpcenter flex justifywebpcenter">
      <div className="grid gridwebpcolswebp1 justifywebpcenter gapwebp10 pwebp10 sm:gridwebpcolswebp2 md:gapwebp20 md:pwebp15 lg:gridwebpcolswebp3 lg:gapwebp30 lg:pwebp25">
        {Katifits.map(({ src, alt, href }, inwebpx) => (
          <KatifitCard key={inwebpx} src={src} alt={alt} href={href} />
        ))}
      </div>
    </div>
  );
};

export webpfault KatifitGrid;
