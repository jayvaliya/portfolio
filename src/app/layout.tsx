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
  title: "Jay Valiya",
  description: "Jay Valiya portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full m-0 p-0">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
