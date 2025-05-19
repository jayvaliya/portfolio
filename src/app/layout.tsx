import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MouseFollower from "@/components/MouseFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Valiya | Full Stack Developer & Software Engineer",
  description: "Portfolio of Jay Valiya, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my projects and skills.",
  keywords: "Jay Valiya, Full Stack Developer, Software Engineer, React Developer, Node.js, JavaScript, Web Development, Portfolio",
  authors: [{ name: "Jay Valiya" }],
  openGraph: {
    title: "Jay Valiya | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    url: "https://jayvaliya.me",
    siteName: "Jay Valiya Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Jay Valiya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Valiya | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    images: ["/twitter-image.jpg"], // Add this image to your public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full m-0 p-0 scroll-smooth cursor-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0`}
        suppressHydrationWarning
      >
        <MouseFollower />
        {children}

        {/* Schema.org structured data for personal portfolio */}
        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jay Valiya",
              "url": "https://jayvaliya.me",
              "image": "https://jayvaliya.me/profile-image.jpg",
              "sameAs": [
                "https://github.com/jayvaliya",
                "https://linkedin.com/in/jay-valiya",
                "https://x.com/jayvaliya09"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Full Stack Developer specializing in React, Node.js, and modern web technologies."
            }
          `}
        </Script>
      </body>
    </html>
  );
}