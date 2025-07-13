"use client";

import { LogoPlaceholder } from "@/lib/helper/ImagePlacholder";
import clsx from "clsx";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { name: "Beranda", route: "/" },
  { name: "Tentang Kami", route: "/about-us" },
  { name: "Artikel", route: "/articles" },
  { name: "Kegiatan", route: "/activities" },
  { name: "Hubungi Kami", route: "/" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-6 py-4 bg-white md:px-[70px] lg:px-[255px] ">
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={60}
          height={60}
          blurDataURL={LogoPlaceholder}
          placeholder="blur"
          className="rounded-full"
        />

        {/* Desktop menu */}
        <nav className="items-center hidden space-x-[38px] text-[15px] font-normal text-shadow-text md:flex">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(item.route + "/");

            const isHubungiKami = item.name === "Hubungi Kami";

            return (
              <Link
                key={item.name}
                href={item.route}
                className={clsx(
                  "transition",
                  !isHubungiKami && "hover:underline hover:text-primary-dark",
                  isHubungiKami &&
                    "px-5 py-3 border rounded-full border-primary-dark text-primary-dark hover:bg-tertiary",
                  isActive &&
                    !isHubungiKami &&
                    "font-bold underline text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu icon */}
        <div className="z-50 md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="size-6 text-primary" />
            ) : (
              <AlignJustify className="size-6 text-primary" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 h-[45%] flex flex-col items-center justify-start px-8 pt-24 text-lg text-gray-800 bg-white md:hidden">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(item.route + "/");

            const isHubungiKami = item.name === "Hubungi Kami";

            return (
              <Link
                key={item.name}
                href={item.route}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "w-full py-4 text-xs font-normal text-center border-b border-gray-300 transition",
                  !isHubungiKami && "hover:underline hover:text-primary",
                  isActive &&
                    !isHubungiKami &&
                    "font-bold underline text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Header;
