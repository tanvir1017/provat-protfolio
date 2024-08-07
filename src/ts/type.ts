import { ReactNode } from "react";

export type ReviewArrType = {
  name: string;
  role: string;
  image: string;
  text: string;
};

export type SocialConnection = {
  name?: string;
  icon?: React.ReactNode;
  url?: string;
  alt?: string;
  color?: string;
  bg?: string;
};

export type ServiceInfoType = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type ThemeProps = {
  className?: string;
  children?: ReactNode;
};

export interface breakPoints {
  breakPoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
}

export type SliderProps = ThemeProps & breakPoints;
