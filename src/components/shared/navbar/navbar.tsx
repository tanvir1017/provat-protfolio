import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="pt-8">
      <nav className="bg-transparent container  flex items-center justify-between">
        <Image
          src="/assets/images/virtu.png"
          height={100}
          width={150}
          alt="Brand logo"
          priority
        />
        <ul className="flex items-center gap-x-6 text-white font-semibold">
          <li>Home</li>
          <li>Design Service</li>
          <li>Manufacturing Service</li>
          <li>
            <Button className="rounded-full bg-white/15 hover:bg-white/15 backdrop-blur-sm  text-white px-14">
              Contact
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
