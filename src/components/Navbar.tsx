"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/components/Katipunan Logo.webp";
import { useState } from "react";
import NavData from "@/data/Nav";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [whichMenuOpen, setWhichMenuOpen] = useState("");

  const toggleMenu = (menu: string) => {
    if (whichMenuOpen === menu) {
      setWhichMenuOpen("");
    } else {
      setWhichMenuOpen(menu);
    }
  };

  const isMobileMenuToggled = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-kpso-brown fixed top-0 z-100 w-full px-6 py-4 text-black">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="hidden w-full items-center justify-center gap-6 lg:flex xl:gap-12">
          {NavData.map(({ name, link, sub }, index) => {
            if (index < Math.floor(NavData.length / 2)) {
              if (link) {
                return (
                  <Link
                    key={index}
                    href={link}
                    className={`md:text-md px-4 py-2 uppercase transition-colors duration-300 md:text-sm lg:text-lg ${
                      pathname === link
                        ? "text-kpso-blue"
                        : "hover:text-kpso-blue"
                    }`}
                  >
                    {name}
                  </Link>
                );
              } else {
                return (
                  <div className="group relative" key={index}>
                    <button
                      className={`md:text-md px-6 py-2 uppercase transition-colors duration-300 hover:cursor-pointer md:text-sm lg:text-lg ${
                        pathname.startsWith("/" + name.toLowerCase())
                          ? "text-kpso-blue"
                          : "hover:text-kpso-blue"
                      }`}
                    >
                      {name}
                    </button>
                    <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {sub &&
                        sub.map(({ subname, sublink }, subindex) => (
                          <Link
                            key={subindex}
                            href={sublink}
                            className={`block px-4 py-4 text-sm uppercase transition-colors duration-300 ${
                              pathname === sublink
                                ? "text-kpso-blue"
                                : "hover:text-kpso-blue"
                            }`}
                          >
                            {subname}
                          </Link>
                        ))}
                    </div>
                  </div>
                );
              }
            }
          })}

          <Link href="/" className="flex min-w-fit items-center justify-center">
            <Image
              src={Logo}
              objectFit="True"
              alt="Kati logo"
              className="w-30 py-2 md:w-30 lg:w-50"
            />
          </Link>

          {NavData.map(({ name, sub }, index) => {
            if (index >= Math.floor(NavData.length / 2)) {
              return (
                <div className="group relative" key={index}>
                  <button
                    className={`md:text-md px-6 py-2 uppercase transition-colors duration-300 hover:cursor-pointer md:text-sm lg:text-lg ${
                      pathname.startsWith("/" + name.toLowerCase())
                        ? "text-kpso-blue"
                        : "hover:text-kpso-blue"
                    }`}
                  >
                    {name}
                  </button>
                  <div className="bg-kpso-red-secondary invisible absolute top-full left-0 -translate-y-2 transform rounded text-black opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {sub &&
                      sub.map(({ subname, sublink }, subindex) => (
                        <Link
                          key={subindex}
                          href={sublink}
                          className={`block px-4 py-4 text-sm uppercase transition-colors duration-300 ${
                            pathname === sublink
                              ? "text-kpso-blue"
                              : "hover:text-kpso-blue"
                          }`}
                        >
                          {subname}
                        </Link>
                      ))}
                  </div>
                </div>
              );
            }
          })}
        </div>

        <Link href="/" className="flex items-center justify-center lg:hidden">
          <Image
            src={Logo}
            objectFit="True"
            alt="Kati logo"
            className="w-30 py-2 md:w-40"
          />
        </Link>

        <button
          onClick={isMobileMenuToggled}
          className="flex justify-end lg:hidden"
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
              {NavData.map(({ name, link, sub }, index) => {
                if (link) {
                  return (
                    <Link
                      key={index}
                      href={link}
                      onClick={isMobileMenuToggled}
                      className="block px-6 py-3 uppercase"
                    >
                      {name}
                    </Link>
                  );
                } else {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => toggleMenu(name)}
                        className="w-full px-6 py-3 text-left uppercase"
                      >
                        {name}
                      </button>
                      <AnimatePresence>
                        {whichMenuOpen === name && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="ml-4 border-l border-black pl-4"
                          >
                            {sub &&
                              sub.map(({ subname, sublink }, subindex) => (
                                <Link
                                  key={subindex}
                                  href={sublink}
                                  onClick={() => {
                                    isMobileMenuToggled();
                                    toggleMenu(name);
                                  }}
                                  className="hover:text-kpso-blue block px-2 py-2 text-sm"
                                >
                                  {subname}
                                </Link>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
