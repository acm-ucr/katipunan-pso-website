import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import Logo from "@/public/Katipunan Logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-kpso-brown bottom-0 mt-32 w-full py-8">
      <div className="flex justify-center space-x-10 py-2">
        <FiFacebook className="text-5xl text-gray-700" />
        <FaInstagram className="text-5xl text-gray-700" />
        <AiOutlineYoutube className="text-5xl text-gray-700" />
      </div>
      <div className="flex justify-center space-x-12 py-2">
        <div className="text-l font-inria-serif text-gray-700">social</div>
        <div className="text-l font-inria-serif text-gray-700">academic</div>
        <div className="text-l font-inria-serif text-gray-700">cultural</div>
        <div className="text-l font-inria-serif text-gray-700">community</div>
      </div>

      <Link href="/" className="flex justify-center">
        <Image
          src={Logo}
          width={200}
          height={32}
          alt="Kati logo"
          className="py-2"
        />
      </Link>
    </div>
  );
};

export default Footer;
