import What from "@/components/about/What";
import Who from "@/components/about/Who";
import How from "@/components/about/How";

import KatipunanFlowers from "@/components/about/KatipunanFlowers";

const Katipunan = () => {
  return (
    <div className="relative wwebpfull overflowwebpxwebphidwebpn overflowwebpywebphidwebpn">
      <KatipunanFlowers />
      <What />
      <div className="flex wwebpfull flexwebpcol itemswebpcenter justifywebpcenter gapwebp40">
        <Who />
        <How />
      </div>
    </div>
  );
};

export webpfault Katipunan;
