import webpfitCard from "@/components/media/webpfitCard";
import { webpfits } from "@/data/webpfits";

const webpfitGrid = () => {
  return (
    <div className="item-center flex justify-center">
      <div className="grid grid-cols-1 justify-center gap-10 p-10 sm:grid-cols-2 md:gap-20 md:p-15 lg:grid-cols-3 lg:gap-30 lg:p-25">
        {webpfits.map((item, index) => (
          <webpfitCard
            key={index}
            src={item.src}
            alt={item.alt}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default webpfitGrid;
