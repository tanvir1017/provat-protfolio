"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Design Service",
    href: "/design-service",
  },
  {
    name: "Manufacturing Service",
    href: "/manufacturing-service",
  },
  {
    name: "Shop",
    href: "/shop",
  },
];

export function DevUiNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 w-full bg-black/5 backdrop-blur-sm z-50 border-b border-[#4c4160]">
      <div className="mx-auto container  flex items-center justify-between py-4">
        <Link href="/" className="inline-flex items-center space-x-2">
          <Image
            src="/assets/images/logo.png"
            height={100}
            width={40}
            alt="logo"
          />
          <span className="font-semibold text-2xl text-white">Str Waves</span>
        </Link>
        <div className="hidden lg-min:block">
          <ul className="inline-flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-white hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <Button
              className="global__Button__gradient text-white transition-all duration-300 ease-in-out rounded-full !px-10 "
              onClick={() => router.push("/contact-us")}
            >
              Contact Us
            </Button>
          </ul>
        </div>
        <div className="lg-min:hidden bg-black/65 backdrop-blur-md rounded-md p-1">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer text-white "
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg-min:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[var(--dark-purple)] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <Link href="/" className="inline-flex items-center space-x-2">
                    <Image
                      src="/assets/images/logo.png"
                      height={100}
                      width={30}
                      alt="logo"
                    />
                    <span className="font-semibold text-xl text-white">
                      Str Waves
                    </span>
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 hover:bg-[#181237c3]  bg-[#160e3f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:border-[#251d4bc3] hover:border-[1px] border-[1px] border-[var(--dark-purple)] hover:bg-[#181237c3]"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                    <Button
                      className="global__Button__gradient text-white transition-all duration-300 ease-in-out rounded-full !px-10 mt-2"
                      onClick={() => router.push("/contact-us")}
                    >
                      Contact Us
                    </Button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
