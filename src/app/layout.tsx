import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Versafolio | Full-Stack Developer Portfolio",
  description:
    "A modern, animated personal portfolio for a full-stack developer specializing in blockchain, APIs, databases, React, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative">
          <Header social={[
            { _id: "1", platform: "Twitter", url: "https://twitter.com" },
            { _id: "2", platform: "GitHub", url: "https://github.com/thesushilsharma" },
            { _id: "3", platform: "LinkedIn", url: "https://linkedin.com/in/thesushilsharma" },
          ]} />
          {children}</main>
      </body>
    </html>
  );
}
