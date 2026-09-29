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
  title: "Andita Bilqis Aulia Rahma | Software Engineer & UI/UX Designer",
  description: "Computer Science Software Engineering Student building things that solve real problems.",
  openGraph: {
    title: "Andita Bilqis Aulia Rahma | Software Engineer & UI/UX Designer",
    description: "Computer Science Software Engineering Student building things that solve real problems.",
    url: "https://anditabilqis.com",
    siteName: "Andita Bilqis Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-main text-text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
