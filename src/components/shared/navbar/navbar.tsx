"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { use } from "react";

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
    <header className={`pt-8`}>
      <nav className="bg-transparent container  flex items-center justify-between">
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
    </header>
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

const MobileNavbar = () => {
  return <div>Mobile Navbar</div>;
};

export default Navbar;
