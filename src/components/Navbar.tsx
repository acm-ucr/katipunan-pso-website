"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/components/Katipunan Logo.webp";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);
  const [isEventsSubMenuOpen, setIsEventsSubMenuOpen] = useState(false);
  const [isCultureSubMenuOpen, setIsCultureSubMenuOpen] = useState(false);
  const [isResourcesSubMenuOpen, setResourcesSubMenuOpen] = useState(false);
  const [isMediaSubMenuOpen, setMediaSubMenuOpen] = useState(false);

  const isActiveGroup = (groupPath: string) => {
    return pathname.startsWith(groupPath);
  };

  const isMobileMenuToggled = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isAboutSubMenuToggled = () => {
    setIsAboutSubMenuOpen(!isAboutSubMenuOpen);
  };

  const isEventsSubMenuToggled = () => {
    setIsEventsSubMenuOpen(!isEventsSubMenuOpen);
  };

  const isCultureSubMenuToggled = () => {
    setIsCultureSubMenuOpen(!isCultureSubMenuOpen);
  };

  const isResourcesSubMenuToggled = () => {
    setResourcesSubMenuOpen(!isResourcesSubMenuOpen);
  };

  const isMediaSubMenuToggled = () => {
    setMediaSubMenuOpen(!isMediaSubMenuOpen);
  };

  return (
    <div className="bg-kpso-brown fixed top-0 z-100 w-full px-6 py-4 text-black">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="hidden items-center gap-12 md:flex">
          <Link
            href="/"
            className={`md:text-md px-4 py-2 uppercase transition-colors duration-300 md:text-sm lg:text-lg ${
              pathname === "/" ? "text-kpso-blue" : "hover:text-kpso-blue"
            }`}
          >
            HOME
          </Link>

          <div className="group relative">
            <button
              className={`md:text-md px-6 py-2 uppercase transition-colors duration-300 hover:cursor-pointer md:text-sm lg:text-lg ${
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
              className={`md:text-md px-4 py-2 uppercase transition-colors duration-300 hover:cursor-pointer md:text-sm lg:text-lg ${
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

        <div className="">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={Logo}
              objectFit="True"
              alt="Kati logo"
              className="w-30 py-2 md:w-30 lg:w-50"
            />
          </Link>
        </div>

        <button
          onClick={isMobileMenuToggled}
          className="flex justify-end md:hidden"
        >
          <svg
            className="h-9 w-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-kpso-red-secondary absolute top-full right-6 z-50 mt-2 w-56 rounded text-black shadow-lg"
            >
              <Link
                href="/"
                onClick={isMobileMenuToggled}
                className="block px-6 py-3 uppercase"
              >
                Home
              </Link>

              <button
                onClick={isAboutSubMenuToggled}
                className="w-full px-6 py-3 text-left uppercase"
              >
                About
              </button>
              <AnimatePresence>
                {isAboutSubMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-4 border-l border-black pl-4"
                  >
                    <Link
                      href="/about/katipunan"
                      onClick={() => {
                        isMobileMenuToggled();
                        isAboutSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      WHAT IS KATIPUNAN
                    </Link>
                    <Link
                      href="/about/cabinet"
                      onClick={() => {
                        isMobileMenuToggled();
                        isAboutSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      MEET THE CABINET
                    </Link>
                    <Link
                      href="/about/constitution"
                      onClick={() => {
                        isMobileMenuToggled();
                        isAboutSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      CONSTITUTION
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={isEventsSubMenuToggled}
                className="w-full px-6 py-3 text-left uppercase"
              >
                Events
              </button>

              <AnimatePresence>
                {isEventsSubMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-4 border-l border-black pl-4"
                  >
                    <Link
                      href="/events/pamilya"
                      onClick={() => {
                        isMobileMenuToggled();
                        isEventsSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      PAMILYA PROGRAM
                    </Link>
                    <Link
                      href="/events/jfav"
                      onClick={() => {
                        isMobileMenuToggled();
                        isEventsSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      JFAV
                    </Link>
                    <Link
                      href="/events/ke"
                      onClick={() => {
                        isMobileMenuToggled();
                        isEventsSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      KATIPUNAN EXPERIENCE
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={isCultureSubMenuToggled}
                className="w-full px-6 py-3 text-left uppercase"
              >
                Culture
              </button>

              <AnimatePresence>
                {isCultureSubMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-4 border-l border-black pl-4"
                  >
                    <Link
                      href="/culture/pacn"
                      onClick={() => {
                        isMobileMenuToggled();
                        isCultureSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      PACN
                    </Link>
                    <Link
                      href="/culture/suite"
                      onClick={() => {
                        isMobileMenuToggled();
                        isCultureSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      SUITE OVERVIEW
                    </Link>
                    <Link
                      href="/culture/board"
                      onClick={() => {
                        isMobileMenuToggled();
                        isCultureSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      BOARD
                    </Link>
                    <Link
                      href="/culture/archive"
                      onClick={() => {
                        isMobileMenuToggled();
                        isCultureSubMenuToggled();
                      }}
                      className="test-sm hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      ARCHIVE
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={isResourcesSubMenuToggled}
                className="w-full px-6 py-3 text-left uppercase"
              >
                Resources
              </button>

              <AnimatePresence>
                {isResourcesSubMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-4 border-l border-black pl-4"
                  >
                    <Link
                      href="/resources/alumni"
                      onClick={() => {
                        isMobileMenuToggled();
                        isResourcesSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      ALUMNI
                    </Link>
                    <Link
                      href="/resources/academics"
                      onClick={() => {
                        isMobileMenuToggled();
                        isResourcesSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      ACADEMICS
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={isMediaSubMenuToggled}
                className="w-full px-6 py-3 text-left uppercase"
              >
                Events
              </button>

              <AnimatePresence>
                {isMediaSubMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-4 border-l border-black pl-4"
                  >
                    <Link
                      href="/media/photos"
                      onClick={() => {
                        isMobileMenuToggled();
                        isMediaSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      PHOTOS
                    </Link>
                    <Link
                      href="/media/videos"
                      onClick={() => {
                        isMobileMenuToggled();
                        isMediaSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      VIDEOS
                    </Link>
                    <Link
                      href="/media/katiweekly"
                      onClick={() => {
                        isMobileMenuToggled();
                        isMediaSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      KATIWEEKLY
                    </Link>
                    <Link
                      href="/media/katifit"
                      onClick={() => {
                        isMobileMenuToggled();
                        isMediaSubMenuToggled();
                      }}
                      className="hover:text-kpso-blue block px-2 py-2 text-sm"
                    >
                      KATIFITS
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden items-center gap-12 md:flex">
          <div className="group relative">
            <button
              className={`md:text-md px-4 py-2 uppercase transition-colors duration-300 hover:cursor-pointer md:text-sm lg:text-lg ${
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
              className={`md:text-md px-4 py-2 uppercase transition-colors duration-300 hover:cursor-pointer md:text-sm lg:text-lg ${
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
              className={`md:text-md px-4 py-2 uppercase transition-colors duration-300 hover:cursor-pointer md:text-sm lg:text-lg ${
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
