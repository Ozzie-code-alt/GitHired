import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Santos - Portfolio Website",
  description: "Portfolio of Justin Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider>
      <div className={ `${inter.className}  dark:bg-black lg:overflow-hidden`}>{children}</div>
    </ThemeProvider>
  );
}
