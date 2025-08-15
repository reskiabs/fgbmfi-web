import ClientGTM from "@/components/ClientGTM";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FGBMFI | Menjangkau Dunia Usaha dengan Injil Kristus",
  description: "Full Gospel Business Men’s International - Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ClientGTM />
      </head>
      <body
        className={`
          min-h-screen flex flex-col 
          bg-gradient-to-b from-[#E8F2F2] to-white 
          ${geistSans.variable} ${geistMono.variable} antialiased
        `}
      >
        <Header />
        <main className="flex-1 pt-[30px] md:pt-[40px] lg:pt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
