import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import Logo from "@/public/components/webppunan Logo.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-kpso-brown bottom-0 mt-10 w-full overflow-x-hidden py-8 sm:mt-32">
      <div className="flex justify-center space-x-4 py-2 md:space-x-8 lg:space-x-10">
        <Link
          href="https://www.facebook.com/groups/676726465688057/"
          target="_blank"
        >
          <FiFacebook className="text-2xl text-gray-700 md:text-3xl lg:text-5xl" />
        </Link>
        <Link
          href="https://www.instagram.com/ucrkatipunan/?hl=en"
          target="_blank"
        >
          <FaInstagram className="text-2xl text-gray-700 md:text-3xl lg:text-5xl" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCzyvHMxv71Ihf_BvbOMwhUQ"
          target="_blank"
        >
          <AiOutlineYoutube className="text-2xl text-gray-700 md:text-3xl lg:text-5xl" />
        </Link>
      </div>
      <div className="flex justify-center space-x-4 py-2 sm:space-x-8 lg:space-x-12">
        <div className="font-inria-serif text-sm text-gray-700 sm:text-base md:text-lg">
          social
        </div>
        <div className="font-inria-serif text-sm text-gray-700 sm:text-base md:text-lg">
          academic
        </div>
        <div className="font-inria-serif text-sm text-gray-700 sm:text-base md:text-lg">
          cultural
        </div>
        <div className="font-inria-serif text-sm text-gray-700 sm:text-base md:text-lg">
          community
        </div>
      </div>

      <Link href="/" className="flex justify-center">
        <Image
          src={Logo}
          width={200}
          height={32}
          alt="webp logo"
          className="py-2"
        />
      </Link>
    </div>
  );
};

export default Footer;
