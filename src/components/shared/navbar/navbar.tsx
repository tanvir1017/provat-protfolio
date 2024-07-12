import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <Image
            src="/assets/images/virtu.png"
            height={100}
            width={250}
            alt="Brand logo"
            priority
          />
          <ul>
            <li>Home</li>
            <li>Design Service</li>
            <li>Manufacturing Service</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
