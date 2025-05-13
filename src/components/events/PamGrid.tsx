import Image from "next/image";
import PAM1 from "@/public/pam/PAM_1.webp";
import PAM2 from "@/public/pam/PAM_2.webp";
import PAM3 from "@/public/pam/PAM_3.webp";
import PAM4 from "@/public/pam/PAM_4.webp";
import PAM5 from "@/public/pam/PAM_5.webp";
import PAM6 from "@/public/pam/PAM_6.webp";

const images = [PAM1, PAM2, PAM3, PAM4, PAM5, PAM6];

const PamGrid = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-6 px-20 py-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative aspect-square h-[300px] w-[300px] sm:h-[320px] sm:w-[320px] xl:h-[350px] xl:w-[350px]"
        >
          <Image src={img} alt={`PAM ${i + 1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
};

export default PamGrid;
