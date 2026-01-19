import type { Metadata, Viewport } from "next";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "./providers";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Newsletter } from "./_sections/newsletter";

import { siteContent } from "@/data/content";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: siteContent.branding.name + " - " + siteContent.branding.tagline,
    template: "%s | " + siteContent.branding.name,
  },
  applicationName: siteContent.branding.name,
  description: siteContent.home.hero.subtitle,
  icons: [
      {
        url: "/favicon.ico",
        rel: "icon",
      },
    ],
    openGraph: { type: "website", siteName: siteContent.branding.name },
    twitter: {
      card: "summary_large_image",
      site: siteContent.branding.name,
    },
};

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-surface-primary text-text-primary dark:bg-dark-surface-primary dark:text-dark-text-primary ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <Providers>
          <Header />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Newsletter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
