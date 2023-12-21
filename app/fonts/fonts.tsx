import { Sarabun, Syne } from "next/font/google";

export const sarabun = Sarabun({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--text-font",
});

export const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--headline-font",
});
