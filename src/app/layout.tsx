import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tran Quang Thong | Software Engineer Portfolio",
  description: "Portfolio of Tran Quang Thong, a Software Engineer specializing in designing and developing production-grade RESTful APIs using NestJS, TypeScript, .NET 8, MongoDB, and SQL Server. Exploring clean architecture, performance optimization, and reliable system integrations.",
  keywords: ["Tran Quang Thong", "Software Engineer", "Backend Developer", "NestJS Developer", ".NET Developer", "Da Nang Developer", "TypeScript", "C#", "MongoDB", "Clean Architecture", "Vietnamese Developer"],
  authors: [{ name: "Tran Quang Thong", url: "https://github.com/thong21112001" }],
  openGraph: {
    title: "Tran Quang Thong | Software Engineer Portfolio",
    description: "Production-grade backend engineering with NestJS, TypeScript, C#, and MongoDB.",
    url: "https://github.com/thong21112001",
    siteName: "Tran Quang Thong Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Quang Thong | Software Engineer Portfolio",
    description: "Backend Engineer specialized in NestJS, .NET 8, and MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-fg-light bg-bg-dark`}
      >
        {children}
      </body>
    </html>
  );
}
