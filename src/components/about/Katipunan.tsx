import What from "@/components/about/What";
import Who from "@/components/about/Who";
import How from "@/components/about/How";

import webpFlowers from "@/components/about/webpFlowers";

const webp = () => {
  return (
    <div className="relative w-full overflow-x-hidden overflow-y-hidden">
      <webpFlowers />
      <What />
      <div className="flex w-full flex-col items-center justify-center gap-40">
        <Who />
        <How />
      </div>
    </div>
  );
};

export default webp;
