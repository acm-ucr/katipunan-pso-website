"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/components/webppunan Logo.webp";

const Navbar = () => {
  const pathname = usePathname();

  const isActiveGroup = (groupPath: string) => {
    return pathname.startsWith(groupPath);
  };

  return (
    <div className="bg-kpso-brown fixed top-0 z-100 w-full px-6 py-4 text-black">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className={`px-4 py-2 text-xl uppercase transition-colors duration-300 ${
              pathname === "/" ? "text-kpso-blue" : "hover:text-kpso-blue"
            }`}
          >
            HOME
          </Link>

          <div className="group relative">
            <button
              className={`px-6 py-2 text-xl uppercase transition-colors duration-300 hover:cursor-pointer ${
                isActiveGroup("/about")
                  ? "text-kpso-blue"
                  : "hover:text-kpso-blue"
              }`}
            >
              ABOUT
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/about/katipunan"
                className={`block px-4 py-4 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/about/katipunan"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                WHAT IS KATIPUNAN
              </Link>
              <Link
                href="/about/cabinet"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/about/cabinet"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                MEET THE CABINET
              </Link>
              <Link
                href="/about/constitution"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/about/constitution"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                CONSTITUTION
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button
              className={`px-4 py-2 text-xl uppercase transition-colors duration-300 hover:cursor-pointer ${
                isActiveGroup("/events")
                  ? "text-kpso-blue"
                  : "hover:text-kpso-blue"
              }`}
            >
              EVENTS
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/events/pamilya"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/events/pamilya"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                PAMILYA PROGRAM
              </Link>
              <Link
                href="/events/jfav"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/events/jfav"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                JFAV
              </Link>
              <Link
                href="/events/ke"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/events/ke"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                KATIPUNAN EXPERIENCE
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
              alt="webp logo"
              className="py-2"
            />
          </Link>
        </div>

        <div className="flex items-center gap-12">
          <div className="group relative">
            <button
              className={`px-4 py-2 text-xl uppercase transition-colors duration-300 hover:cursor-pointer ${
                isActiveGroup("/culture")
                  ? "text-kpso-blue"
                  : "hover:text-kpso-blue"
              }`}
            >
              CULTURE
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/culture/pacn"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/culture/pacn"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                PACN
              </Link>
              <Link
                href="/culture/suite"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/culture/suite"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                SUITE OVERVIEW
              </Link>
              <Link
                href="/culture/board"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/culture/board"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                BOARD
              </Link>
              <Link
                href="/culture/archive"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/culture/archive"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                ARCHIVE
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button
              className={`px-4 py-2 text-xl uppercase transition-colors duration-300 hover:cursor-pointer ${
                isActiveGroup("/resources")
                  ? "text-kpso-blue"
                  : "hover:text-kpso-blue"
              }`}
            >
              RESOURCES
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-3 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/resources/alumni"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/resources/alumni"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                ALUMNI
              </Link>
              <Link
                href="/resources/academics"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/resources/academics"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                ACADEMICS
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button
              className={`px-4 py-2 text-xl uppercase transition-colors duration-300 hover:cursor-pointer ${
                isActiveGroup("/media")
                  ? "text-kpso-blue"
                  : "hover:text-kpso-blue"
              }`}
            >
              MEDIA
            </button>
            <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/media/photos"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/media/photos"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                PHOTOS
              </Link>
              <Link
                href="/media/videos"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/media/videos"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                VIDEOS
              </Link>
              <Link
                href="/media/katiweekly"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/media/katiweekly"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                KATIWEEKLY
              </Link>
              <Link
                href="/media/katifit"
                className={`block px-4 py-2 text-sm uppercase transition-colors duration-300 ${
                  pathname === "/media/katifit"
                    ? "text-kpso-blue"
                    : "hover:text-kpso-blue"
                }`}
              >
                KATIFITS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
