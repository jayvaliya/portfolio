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
  title: "Jay Valiya | Portfolio",
  description: "Portfolio of Jay Valiya, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my projects and skills.",
  keywords: "Jay Valiya, Full Stack Developer, Software Engineer, React Developer, Node.js, JavaScript, Web Development, Portfolio, Frontend Developer, Backend Developer",
  authors: [{ name: "Jay Valiya" }],
  robots: "index, follow",
  metadataBase: new URL("https://jayvaliya.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jay Valiya | Portfolio",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    url: "https://jayvaliya.me",
    siteName: "Jay Valiya Portfolio",
    images: [
      {
        url: "https://jayvaliya.me/api/og",
        width: 1200,
        height: 630,
        alt: "Jay Valiya - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Valiya | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    images: ["https://jayvaliya.me/api/og"],
    creator: "@jayvaliya09",
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
              "description": "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
              "knowsAbout": ["React", "Node.js", "TypeScript", "JavaScript", "Next.js", "MongoDB", "PostgreSQL", "Web Development"],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "skills": "React.js, Node.js, Next.js, TypeScript, MongoDB, PostgreSQL"
              }
            }
          `}
        </Script>
        <Script id="schema-portfolio" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jay Valiya Portfolio",
              "url": "https://jayvaliya.me",
              "description": "Portfolio of Jay Valiya, a Full Stack Developer specializing in React, Node.js, and modern web technologies.",
              "author": {
                "@type": "Person",
                "name": "Jay Valiya"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jayvaliya.me?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}