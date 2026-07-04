import type { Metadata } from "next";
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
  title: "Deploy your World.",
  description:
    "Developed ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${HandjetFont.variable} ${baloo2.variable} ${icebergFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}