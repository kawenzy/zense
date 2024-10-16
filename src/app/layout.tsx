"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import "./globals.css";
import "./my.css";
import NavbarPage from "@/components/page/navbar.page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const popR = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-pop-r",
});

const popB = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-pop-b",
});

const popSB = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-pop-sb",
  weight: "100 900"
});

const preahvihear = localFont({
  src: "./fonts/Preahvihear-Regular.ttf",
  variable: "--font-preahvihear-r",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let tags: string[];
  const path = usePathname();
  tags = ["/", "/home"];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${preahvihear.variable} ${popSB.variable} ${popB.variable} ${popR.variable}`}
      >
        {path == tags[0] ? <NavbarPage /> : null}
        {children}
      </body>
    </html>
  );
}
