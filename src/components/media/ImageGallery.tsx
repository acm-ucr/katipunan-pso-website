import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageData {
  src: StaticImageData;
  name: string;
}

interface ImageGalleryProps {
  galleryData: ImageData[];
}

const ImageGallery = ({ galleryData }: ImageGalleryProps) => {
  return (
    <div className="mt-4 flex w-full justify-center">
      <div className="grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {galleryData.map((item, index) => (
          <Image
            className="rounded-lg object-cover"
            key={index}
            src={item.src}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
