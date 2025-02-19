import { IconType } from "react-icons";

export interface NavigationItem {
  href: string;
  icon: IconType;
  text: string;
  external?: boolean;
} 