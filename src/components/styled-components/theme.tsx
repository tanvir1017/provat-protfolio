import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import * as Shadcn from "../ui/button";

// Used as background for matching the theme context
const PurpleBlurry = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-10 bg-black after:content-['hello'] after:bg-gradient-to-tr after:from-indigo-500/65 after:to-indigo-800/55 after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[800px] after:h-[800px] after:rounded-full after:blur-[280px] after:-z-10 bg-center bg-cover pb-10",
        className
      )}
    >
      {children}
    </div>
  );
};

// Gradient Button with purple and white shade
const PrimaryButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Shadcn.Button
      className={cn(
        "global__Button__gradient px-14 py-6 rounded-md relative overflow-hidden tracking-wider transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </Shadcn.Button>
  );
};

// Purple Button without gradient
const SecondaryButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Shadcn.Button
      className={cn(
        "bg-[var(--indigo-5)] hover:bg-[var(--indigo-5)]  px-14 py-6 rounded-md relative overflow-hidden tracking-wider transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </Shadcn.Button>
  );
};

export { PurpleBlurry, PrimaryButton, SecondaryButton };
