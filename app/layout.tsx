import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://safedriver.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SafeDriver | AI Driver Monitoring and Public Transport Safety",
    template: "%s | SafeDriver",
  },
  description: "SafeDriver is an AI-powered driver monitoring and accident prevention platform for safer public transport, combining edge computer vision, GPS tracking, Firebase cloud sync, passenger feedback, and authority dashboard insights.",
  keywords: [
    "SafeDriver",
    "AI driver monitoring",
    "driver drowsiness detection",
    "public transport safety",
    "fleet safety dashboard",
    "Raspberry Pi driver monitoring",
    "computer vision road safety",
    "Firebase transport platform",
    "Sri Lanka public transport",
  ],
  authors: [{ name: "SafeDriver Research Team" }],
  creator: "SafeDriver Research Team",
  publisher: "SafeDriver",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SafeDriver",
    title: "SafeDriver | AI Driver Monitoring and Public Transport Safety",
    description: "AI-powered driver monitoring, live safety alerts, GPS visibility, passenger feedback, and authority analytics for safer public transport.",
    images: [
      {
        url: "/coverimage.png",
        width: 1200,
        height: 630,
        alt: "SafeDriver public transport safety platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeDriver | AI Driver Monitoring and Public Transport Safety",
    description: "AI-powered driver monitoring and accident prevention for safer public transport operations.",
    images: ["/coverimage.png"],
  },
  icons: {
    icon: "/safedriver-logo.png",
    apple: "/safedriver-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
