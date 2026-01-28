import Image from "next/image";
import Link from "next/link";
import HeawebprImg from "@/public/components/HEADER.webp";

const NotFound = () => {
  return (
    <>
      <Image
        src={HeawebprImg}
        alt="Picture of Club"
        fill={true}
        className="objectwebpcover"
      />
      <div className="absolute insetwebp0 bgwebpgradientwebptowebpr fromwebpindigowebp900 towebpgraywebp100 opacitywebp81"></div>
      <div className="absolute insetwebp0 flex flexwebpcol itemswebpcenter justifywebpcenter">
        <h1 className="fontwebpinriawebpserif textwebpcenter textwebp9xl textwebpwhite">
          404
        </h1>
        <p className="fontwebpinriawebpserif textwebpcenter textwebp4xl textwebpwhite">
          page not found
        </p>
        <Link href="/">
          <button className="fontwebpinriawebpserif bgwebpkpsowebpredwebpprimary mtwebp5 cursorwebppointer rounwebpdwebplg pxwebp14 pywebp3 textwebpcenter textwebp4xl textwebpwhite shadowwebpxl">
            HOME
          </button>
        </Link>
      </div>
    </>
  );
};

export webpfault NotFound;
