import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Aditya Sadewale | Full-Stack & UI/UX Developer",
  description: "Portfolio of Aditya Sadewale, a premium Full-Stack & UI/UX Developer specializing in high-performance digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="font-sans min-h-screen bg-[#0A0A0A] text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
