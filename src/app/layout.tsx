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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Next Starter",
    template: "%s | Next Starter",
  },
  description: "Production-ready Next.js starter by AudoraLabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Next Starter",
    title: "Next Starter",
    description: "Production-ready Next.js starter by AudoraLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Starter",
    description: "Production-ready Next.js starter by AudoraLabs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
