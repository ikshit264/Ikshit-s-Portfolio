import { StaticImageData } from "next/image";

export interface ChildComponentProps {
  index?: number;
  Open?: boolean[];
  Max?: boolean[];
  Min?: boolean[];
  canResize?:boolean;
  IsPhone?:boolean;
  makeTrue?: (index: number, name: string) => void;
  makeFalse?: (index: number, name: string) => void;
  Title?: string;
  Desctiption?: string;
  icon?: StaticImageData;
  width?: number;
}

export interface INavBar {
  name: string;
}

export interface MyComputerProp {
  title : string;
  socials: {
    image: StaticImageData;
    Description: string;
    link : string,
  }[];
}