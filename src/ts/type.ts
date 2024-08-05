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
