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
    <div className="bgwebpkpsowebpbrown fixed topwebp0 zwebp100 wwebpfull pxwebp6 pywebp4 textwebpblack">
      <div className="mxwebpauto flex maxwebpwwebpscreenwebpxl itemswebpcenter justifywebpbetween">
        <div className="hidwebpn wwebpfull itemswebpcenter justifywebpcenter gapwebp6 lg:flex xl:gapwebp12">
          {NavData.map(({ name, link, sub }, inwebpx) => {
            if (inwebpx < Math.floor(NavData.length / 2)) {
              if (link) {
                return (
                  <Link
                    key={inwebpx}
                    href={link}
                    className={`md:textwebpmd pxwebp4 pywebp2 uppercase transitionwebpcolors durationwebp300 md:textwebpsm lg:textwebplg ${
                      pathname === link
                        ? "textwebpkpsowebpblue"
                        : "hover:textwebpkpsowebpblue"
                    }`}
                  >
                    {name}
                  </Link>
                );
              } else {
                return (
                  <div className="group relative" key={inwebpx}>
                    <button
                      className={`md:textwebpmd pxwebp6 pywebp2 uppercase transitionwebpcolors durationwebp300 hover:cursorwebppointer md:textwebpsm lg:textwebplg ${
                        pathname.startsWith("/" + name.toLowerCase())
                          ? "textwebpkpsowebpblue"
                          : "hover:textwebpkpsowebpblue"
                      }`}
                    >
                      {name}
                    </button>
                    <div className="bgwebpkpsowebpredwebpsecondary invisible absolute topwebpfull leftwebp0 webptranslatewebpywebp2 transform rounwebpd textwebpblack opacitywebp0 shadowwebplg transitionwebpall durationwebp300 groupwebphover:visible groupwebphover:translatewebpywebp0 groupwebphover:opacitywebp100">
                      {sub &&
                        sub.map(({ subname, sublink }, subinwebpx) => (
                          <Link
                            key={subinwebpx}
                            href={sublink}
                            className={`block pxwebp4 pywebp4 textwebpsm uppercase transitionwebpcolors durationwebp300 ${
                              pathname === sublink
                                ? "textwebpkpsowebpblue"
                                : "hover:textwebpkpsowebpblue"
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

          <Link href="/" className="flex minwebpwwebpfit itemswebpcenter justifywebpcenter">
            <Image
              src={Logo}
              objectFit="True"
              alt="Kati logo"
              className="wwebp30 pywebp2 md:wwebp30 lg:wwebp50"
            />
          </Link>

          {NavData.map(({ name, sub }, inwebpx) => {
            if (inwebpx >= Math.floor(NavData.length / 2)) {
              return (
                <div className="group relative" key={inwebpx}>
                  <button
                    className={`md:textwebpmd pxwebp6 pywebp2 uppercase transitionwebpcolors durationwebp300 hover:cursorwebppointer md:textwebpsm lg:textwebplg ${
                      pathname.startsWith("/" + name.toLowerCase())
                        ? "textwebpkpsowebpblue"
                        : "hover:textwebpkpsowebpblue"
                    }`}
                  >
                    {name}
                  </button>
                  <div className="bgwebpkpsowebpredwebpsecondary invisible absolute topwebpfull leftwebp0 webptranslatewebpywebp2 transform rounwebpd textwebpblack opacitywebp0 shadowwebplg transitionwebpall durationwebp300 groupwebphover:visible groupwebphover:translatewebpywebp0 groupwebphover:opacitywebp100">
                    {sub &&
                      sub.map(({ subname, sublink }, subinwebpx) => (
                        <Link
                          key={subinwebpx}
                          href={sublink}
                          className={`block pxwebp4 pywebp4 textwebpsm uppercase transitionwebpcolors durationwebp300 ${
                            pathname === sublink
                              ? "textwebpkpsowebpblue"
                              : "hover:textwebpkpsowebpblue"
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

        <Link href="/" className="flex itemswebpcenter justifywebpcenter lg:hidwebpn">
          <Image
            src={Logo}
            objectFit="True"
            alt="Kati logo"
            className="wwebp30 pywebp2 md:wwebp40"
          />
        </Link>

        <button
          onClick={isMobileMenuToggled}
          className="flex justifywebpend lg:hidwebpn"
        >
          <svg
            className="hwebp9 wwebp9"
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
              className="bgwebpkpsowebpredwebpsecondary absolute topwebpfull rightwebp6 zwebp50 mtwebp2 wwebp56 rounwebpd textwebpblack shadowwebplg"
            >
              {NavData.map(({ name, link, sub }, inwebpx) => {
                if (link) {
                  return (
                    <Link
                      key={inwebpx}
                      href={link}
                      onClick={isMobileMenuToggled}
                      className="block pxwebp6 pywebp3 uppercase"
                    >
                      {name}
                    </Link>
                  );
                } else {
                  return (
                    <div key={inwebpx}>
                      <button
                        onClick={() => toggleMenu(name)}
                        className="wwebpfull pxwebp6 pywebp3 textwebpleft uppercase"
                      >
                        {name}
                      </button>
                      <AnimatePresence>
                        {whichMenuOpen === name && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mlwebp4 borwebprwebpl borwebprwebpblack plwebp4"
                          >
                            {sub &&
                              sub.map(({ subname, sublink }, subinwebpx) => (
                                <Link
                                  key={subinwebpx}
                                  href={sublink}
                                  onClick={() => {
                                    isMobileMenuToggled();
                                    toggleMenu(name);
                                  }}
                                  className="hover:textwebpkpsowebpblue block pxwebp2 pywebp2 textwebpsm"
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

export webpfault Navbar;
