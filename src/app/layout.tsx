import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimationOptimizer from "@/components/ScrollAnimationOptimizer";
import ChatBot from "@/components/ChatBot";
import MouseFollower from "@/components/MouseFollower";
import ParallaxBackground from "@/components/ParallaxBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neurozic Software Solutions Pvt. Ltd - Innovative Technology Solutions in Bengaluru",
  description: "Leading technology company in Bengaluru providing innovative software solutions, web development, mobile apps, cloud solutions, and digital transformation services. Contact: techinfo@neurozic.com",
  keywords: "Neurozic, software solutions, web development, mobile apps, cloud solutions, Bengaluru IT company, digital transformation, custom software development",
  openGraph: {
    title: "Neurozic Software Solutions - Leading IT Company in Bengaluru",
    description: "Innovative technology solutions and software development services. Expert team delivering cutting-edge digital solutions.",
    url: "https://neurozic.com",
    siteName: "Neurozic Software Solutions",
    images: [
      {
        url: "/company-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Neurozic Software Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurozic Software Solutions - Leading IT Company",
    description: "Innovative technology solutions and software development services in Bengaluru.",
    images: ["/company-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://neurozic.com",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParallaxBackground />
        <MouseFollower />
        <ScrollAnimationOptimizer />
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
