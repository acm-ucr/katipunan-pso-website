import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Katipunan Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-kpso-brown px-6 py-4 text-black">
      <ul className="mx-auto flex max-w-screen-xl flex-nowrap items-center justify-between gap-6">
        <li>
          <Link href="/" className="px-4 py-2 text-xl">
            HOME
          </Link>
        </li>

        <li className="group relative">
          <button className="rounded-inline-block px-6 py-2 text-xl hover:cursor-pointer">
            ABOUT
          </button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <Link href="/about/katipunan" className="block px-4 py-4">
                What is Katipunan
              </Link>
            </li>
            <li>
              <Link href="/about/cabinet" className="block px-4 py-2">
                Meet the Cabinet
              </Link>
            </li>
            <li>
              <Link href="/about/constitution" className="block px-4 py-2">
                Constitution
              </Link>
            </li>
          </ul>
        </li>

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2 text-xl hover:cursor-pointer">
            EVENTS
          </button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <Link href="/events/pamilya" className="block px-4 py-2">
                Pamilya Program
              </Link>
            </li>
            <li>
              <Link href="/events/jfav" className="block px-4 py-2">
                JFAV
              </Link>
            </li>
            <li>
              <Link href="/events/ke" className="block px-4 py-2">
                Katipunan Experience
              </Link>
            </li>
          </ul>
        </li>
        <Link href="/">
          <Image
            src={Logo}
            width={175}
            height={60}
            alt="Kati logo"
            className="py-4"
          />
        </Link>

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2 text-xl hover:cursor-pointer">
            CULTURE
          </button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <Link href="/culture/pacn" className="block px-4 py-2">
                PACN
              </Link>
            </li>
            <li>
              <Link href="/culture/suite" className="block px-4 py-2">
                Suite Overview
              </Link>
            </li>
            <li>
              <Link href="/culture/board" className="block px-4 py-2">
                Board
              </Link>
            </li>
            <li>
              <Link href="/culture/archive" className="block px-4 py-2">
                Archive
              </Link>
            </li>
          </ul>
        </li>

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2 text-xl hover:cursor-pointer">
            RESOURCES
          </button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <Link href="/resources/alumni" className="block px-4 py-2">
                Alumni
              </Link>
            </li>
            <li>
              <Link href="/resources/academics" className="block px-4 py-2">
                Academics
              </Link>
            </li>
            <li>
              <Link href="/resources/time-capsule" className="block px-4 py-2">
                Time Capsule
              </Link>
            </li>
          </ul>
        </li>

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2 text-xl hover:cursor-pointer">
            MEDIA
          </button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <Link href="#" className="block px-4 py-2">
                Photos
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2">
                Videos
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2">
                Katiweekly
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2">
                Katifits
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
