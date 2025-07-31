import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  icons: "/icon.png",
  title: {
    default: "Doni Pebruwantoro - Software Engineer",
    template: "%s | Doni Pebruwantoro",
  },
  description: "The personal portfolio of Doni Pebruwantoro, a full-stack software engineer specializing in backend development and creating robust, scalable SaaS-based architectures.",
  keywords: ["Doni Pebruwantoro", "Doni", "Perbuwantoro", "software engineer", "backend developer", "full-stack", "SaaS", "Go", "JavaScript", "NodeJS", "Python", "SwiftUI", "ReactJS"],
  alternates: {
    canonical: "https://pebruwantoro.com",
  },
  openGraph: {
    title: "Doni Pebruwantoro - Software Engineer",
    description: "The personal portfolio of Doni Pebruwantoro, a full-stack software engineer specializing in backend development and creating robust, scalable SaaS-based architectures.",
    url: "https://pebruwantoro.com",
    siteName: "Doni Pebruwantoro's Portfolio",
    images: [
      {
        url: "public/profile.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doni Pebruwantoro - Software Engineer",
    description: "The personal portfolio of Doni Pebruwantoro, a full-stack software engineer specializing in backend development and creating robust, scalable SaaS-based architectures.",
    images: ["public/profile.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-8 flex justify-between items-center py-4">
            <Link href="/" className="section-title text-2xl font-bold text-primary">
              Doni Pebruwantoro
            </Link>
            {/* <div className="space-x-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </div> */}
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
