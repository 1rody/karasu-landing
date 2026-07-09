import type { Metadata } from "next";
import { ViewTransition } from 'react'

import { Geist, Handjet, Baloo_2, Iceberg } from "next/font/google";
import "@/src/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HandjetFont = Handjet({
  variable: "--font-Handjet",
  weight: ["700"],
  subsets: ["latin"],
});

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
});

const icebergFont = Iceberg({
  variable: "--font-iceberg",
  weight: "400", // Iceberg só tem peso 400
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karasu — Security that watches while you sleep",
  description:
    "front-end by rody",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${HandjetFont.variable} ${baloo2.variable} ${icebergFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ViewTransition update="page">
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}