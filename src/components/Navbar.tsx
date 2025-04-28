import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/webppunan Logo.webp";

const Navbar = () => {
  return (
    <div className="bg-kpso-brown fixed top-0 z-100 w-full px-6 py-4 text-black">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="px-4 py-2 text-xl">
            HOME
          </Link>

          <div className="group relative">
            <button className="px-6 py-2 text-xl hover:cursor-pointer">
              ABOUT
            </button>
            <div className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
              <Link href="/about/katipunan" className="block px-4 py-4">
                webp is webppunan
              </Link>
              <Link href="/about/cabinet" className="block px-4 py-2">
                Meet the Cabinet
              </Link>
              <Link href="/about/constitution" className="block px-4 py-2">
                Constitution
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="px-4 py-2 text-xl hover:cursor-pointer">
              EVENTS
            </button>
            <div className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
              <Link href="/events/pamilya" className="block px-4 py-2">
                Pamilya Program
              </Link>
              <Link href="/events/jfav" className="block px-4 py-2">
                JFAV
              </Link>
              <Link href="/events/ke" className="block px-4 py-2">
                webppunan Experience
              </Link>
            </div>
          </div>
        </div>

        {/* put absolute center positioning on logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={Logo}
              width={175}
              height={60}
              alt="webp logo"
              className="py-2"
            />
          </Link>
        </div>

        <div className="flex items-center gap-12">
          <div className="group relative">
            <button className="px-4 py-2 text-xl hover:cursor-pointer">
              CULTURE
            </button>
            <div className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
              <Link href="/culture/pacn" className="block px-4 py-2">
                PACN
              </Link>
              <Link href="/culture/suite" className="block px-4 py-2">
                Suite Overview
              </Link>
              <Link href="/culture/board" className="block px-4 py-2">
                Board
              </Link>
              <Link href="/culture/archive" className="block px-4 py-2">
                Archive
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="px-4 py-2 text-xl hover:cursor-pointer">
              RESOURCES
            </button>
            <div className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
              <Link href="/resources/alumni" className="block px-4 py-2">
                Alumni
              </Link>
              <Link href="/resources/academics" className="block px-4 py-2">
                Academics
              </Link>
              <Link href="/resources/time-capsule" className="block px-4 py-2">
                Time Capsule
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="px-4 py-2 text-xl hover:cursor-pointer">
              MEDIA
            </button>
            <div className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
              <Link href="/media/photos" className="block px-4 py-2">
                Photos
              </Link>
              <Link href="/media/videos" className="block px-4 py-2">
                Videos
              </Link>
              <Link href="/media/katiweekly" className="block px-4 py-2">
                webpweekly
              </Link>
              <Link href="/media/katifit" className="block px-4 py-2">
                webpfits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
