import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { socialLinks, contactInfo } from "@/lib/data";
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
  title: "Tesfalem Tamene Weldu - Portfolio",
  description: "Software Developer and AI Enthusiast building intelligent scalable solutions.",
  openGraph: {
    title: "Tesfalem Tamene Weldu - Portfolio",
    description: "Software Developer and AI Enthusiast building intelligent scalable solutions.",
    url: "https://tesfalem.com", // Update with your actual domain
    siteName: "Tesfalem Tamene Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract URLs for JSON-LD schema
  const socialUrls = socialLinks.map(link => link.href).filter(href => !href.startsWith('mailto:'));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": contactInfo.name,
    "url": "https://tesfalem.com", // Update with your actual domain
    "jobTitle": "Software Developer",
    "sameAs": socialUrls,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
