import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Katipunan Logo.png";

const Navbar = () => {
  return (
    <div className="bg-kpso-brown fixed top-0 z-100 w-full px-6 py-4 text-black">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="hover:text-kpso-blue px-4 py-2 text-xl transition-colors duration-300"
          >
            HOME
          </Link>

          <div className="group relative">
            <button className="hover:text-kpso-blue px-6 py-2 text-xl transition-colors duration-300 hover:cursor-pointer">
              ABOUT
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/about/katipunan"
                className="hover:text-kpso-blue block px-4 py-4 transition-colors duration-300"
              >
                What is Katipunan
              </Link>
              <Link
                href="/about/cabinet"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Meet the Cabinet
              </Link>
              <Link
                href="/about/constitution"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Constitution
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="hover:text-kpso-blue px-4 py-2 text-xl transition-colors duration-300 hover:cursor-pointer">
              EVENTS
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/events/pamilya"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Pamilya Program
              </Link>
              <Link
                href="/events/jfav"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                JFAV
              </Link>
              <Link
                href="/events/ke"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Katipunan Experience
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={Logo}
              width={175}
              height={60}
              alt="Kati logo"
              className="py-2"
            />
          </Link>
        </div>

        <div className="flex items-center gap-12">
          <div className="group relative">
            <button className="hover:text-kpso-blue px-4 py-2 text-xl transition-colors duration-300 hover:cursor-pointer">
              CULTURE
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/culture/pacn"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                PACN
              </Link>
              <Link
                href="/culture/suite"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Suite Overview
              </Link>
              <Link
                href="/culture/board"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Board
              </Link>
              <Link
                href="/culture/archive"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Archive
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="hover:text-kpso-blue px-4 py-2 text-xl transition-colors duration-300 hover:cursor-pointer">
              RESOURCES
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-3 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/resources/alumni"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Alumni
              </Link>
              <Link
                href="/resources/academics"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Academics
              </Link>
              <Link
                href="/resources/time-capsule"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Time Capsule
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="hover:text-kpso-blue px-4 py-2 text-xl transition-colors duration-300 hover:cursor-pointer">
              MEDIA
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/media/photos"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Photos
              </Link>
              <Link
                href="/media/videos"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Videos
              </Link>
              <Link
                href="/media/katiweekly"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Katiweekly
              </Link>
              <Link
                href="/media/katifit"
                className="hover:text-kpso-blue block px-4 py-2 transition-colors duration-300"
              >
                Katifits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
