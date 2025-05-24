import webp from "@/components/about/webp";
import Who from "@/components/about/Who";
import How from "@/components/about/How";

import webppunanFlowers from "@/components/about/webppunanFlowers";

const webppunan = () => {
  return (
    <div className="relative w-full overflow-x-hidden overflow-y-hidden">
      <webppunanFlowers />
      <webp />
      <div className="flex w-full flex-col items-center justify-center gap-40">
        <Who />
        <How />
      </div>
    </div>
  );
};

export default webppunan;
