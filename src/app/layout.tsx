import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { DevUiNavbar } from "@/components/shared/navbar/devui-navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Str Wave",
  description: "This is a description for Str Wave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <DevUiNavbar />
        <div className="lg-min:-mt-20 -mt-24">{children}</div>
      </body>
    </html>
  );
}
