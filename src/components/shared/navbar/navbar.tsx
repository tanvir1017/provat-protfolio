"use client";
import * as Theme from "@/components/styled-components/theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { use, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <header
        className={`bg-black py-8 ${
          ["/"].includes(pathname) ? "hidden" : "block"
        }`}
      >
        <NavbarWithoutHome />
      </header>
    </>
  );
};

export const NavbarWithHome = () => {
  return (
    <header className={`pt-8 `}>
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
};

const MobileNavbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(!false);
  const toggleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu);
  const router = useRouter();
  return (
    <nav className="relative bg-transparent container lg-min:hidden flex items-center justify-between ">
      <Image
        src="/assets/images/virtu.png"
        height={100}
        width={100}
        alt="Brand logo"
        priority
        onClick={() => router.push("/")}
      />

      {showHamburgerMenu ? (
        <Menu
          className="cursor-pointer text-white"
          onClick={toggleHamburgerMenu}
        />
      ) : (
        <X
          className="cursor-pointer text-white"
          onClick={toggleHamburgerMenu}
        />
      )}
      <div
        className={cn(
          "absolute w-full top-10 left-0 z-10 overflow-hidden transition-all duration-300",
          {
            ["!h-[0px]"]: showHamburgerMenu,
            ["!h-[200px]"]: !showHamburgerMenu,
          }
        )}
      >
        <ul
          className={cn(
            "space-y-1 text-white child-hover:text-black bg-[var(--dark-purple)] font-medium [&>li:hover]:bg-white [&>li]:px-5 [&>li]:py-2 h-full py-2",
            {
              ["!h:0px"]: showHamburgerMenu,
              ["!h:200px"]: !showHamburgerMenu,
            }
          )}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/design-service">Design Service</Link>
          </li>
          <li>
            <Link href="/manufacturing-service">Manufacturing Service</Link>
          </li>
          <div className="ml-5 !mt-3">
            <Button
              className="global__Button__gradient text-white transition-all duration-300 ease-in-out rounded-full !px-10 "
              onClick={() => router.push("/contact-me")}
            >
              Contact me
            </Button>
          </div>
        </ul>
      </div>
    </nav>
  );
};
const DesktopNavbar = () => {
  return (
    <nav className="bg-transparent container hidden lg-min:flex items-center justify-between">
      <Link href="/">
        <Image
          src="/assets/images/virtu.png"
          height={100}
          width={150}
          alt="Brand logo"
          priority
        />
      </Link>
      <ul className="flex items-center gap-x-6 text-white font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/design-service">Design Service</Link>
        </li>
        <li>
          <Link href="/manufacturing-service">Manufacturing Service</Link>
        </li>
        <li>
          <Link href="/contact-me">
            <Button className="rounded-full global__Button__gradient text-white px-14 transition-all duration-300 ease-in-out">
              Contact
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const NavbarWithoutHome = () => {
  return (
    <nav className=" container  flex items-center justify-between">
      <Link href="/">
        <Image
          src="/assets/images/virtu.png"
          height={100}
          width={150}
          alt="Brand logo"
          priority
        />
      </Link>
      <ul className="flex items-center gap-x-6 text-white font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/design-service">Design Service</Link>
        </li>
        <li>
          <Link href="/manufacturing-service">Manufacturing Service</Link>
        </li>
        <li>
          <Link href="/contact-me">
            <Button className="rounded-full bg-white/15 hover:bg-white/15 backdrop-blur-sm  text-white px-14">
              Contact
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
