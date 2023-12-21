import type { Metadata } from "next";

//Typography
import { syne, sarabun } from "./fonts/fonts";

//Styling
import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "Fabian Geitner | UX-Designer & Frontend Developer",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${syne.variable} ${sarabun.variable}`}>
        {/* Header */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
