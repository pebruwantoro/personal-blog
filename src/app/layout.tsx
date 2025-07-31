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
  title: "Pebruwantoro",
  description: "The personal portfolio of Doni Pebruwantoro, a Software Engineer.",
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
