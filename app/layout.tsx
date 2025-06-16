import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/google-analytics";
import type { Metadata, Viewport } from "next";
import { Raleway, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
// import MouseEffect from "@/components/ui/mouse-effect";
import { cn } from "@/lib/utils";

// Raleway for body text
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

// Space Grotesk for headings
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  // Basic
  title: {
    default: "Emediong Udoh | Web Developer",
    template: "%s | Emediong's Portfolio",
  },
  description:
    "Hi, My name is Emediong! I'm a passionate full-stack JavaScript web developer with expertise in React, Node.js, Next.js, MongoDB, and Express. I enjoy building dynamic, user-friendly applications that solve real-world problems.",
  metadataBase: new URL("https://emediongudoh.vercel.app"),
  applicationName: "Emediong Udoh Portfolio",

  // Keywords and Categories
  keywords: [
    "Emediong",
    "Udoh",
    "Emediong Udoh",
    "Emediong Udoh Nseh",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI Developer",
    "JavaScript Developer",
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
    "Node.js Developer",
    "Web Development Portfolio",
    "React Portfolio",
    "Frontend Portfolio",
    "Modern Web Development",
    "Web Designer",
    "UI/UX Development",
    "Portfolio",
  ],
  category: "portfolio",

  // Creator Info
  authors: [
    {
      name: "Emediong Udoh",
      url: "https://emediongudoh-vercel.app",
    },
  ],
  creator: "Emediong Udoh",
  publisher: "Emediong Udoh",

  // Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      me: [
        "https://github.com/emediongudoh",
        // "https://linkedin.com/in/hassan-umar-hassan",
      ],
    },
  },

  // Alternate Languages/Versions
  alternates: {
    canonical: "https://emediongudoh.vercel.app",
    languages: {
      "en-US": "https://emediongudoh.vercel.app",
    },
  },

  // OpenGraph
  openGraph: {
    type: "website",
    siteName: "Emediong Udoh Portfolio",
    title: "Emediong Udoh | Web Developer",
    description:
      "Hi, My name is Emediong! I'm a passionate full-stack JavaScript web developer with expertise in React, Node.js, Next.js, MongoDB, and Express. I enjoy building dynamic, user-friendly applications that solve real-world problems.",
    url: "https://emediongudoh.vercel.app",
    locale: "en_US",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Emediong Udoh | Web Developer",
    description:
      "Web Developer specialized in building modern web applications with React, Next.js, and TypeScript.",
    creator: "@emediong5135",
    site: "@emediong5135",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Other Important SEO Tags
  referrer: "origin-when-cross-origin",
  classification: "Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f6f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1714" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  // const isTouchDevice =
  //   typeof window !== "undefined" &&
  //   ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          raleway.variable,
          spaceGrotesk.variable,
          "bg-background-base font-raleway text-default-base selection:bg-primary-base/30 dark:bg-background-base-dark dark:text-default-base-dark dark:selection:bg-primary-base-dark/40",
          // !isTouchDevice && "cursor-none", // Add this class conditionally
        )}
      >
        {gaId && <GoogleAnalytics GA_MEASUREMENT_ID={gaId} />}
        <ActiveSectionContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <MouseEffect /> */}
            {children}
            <Analytics />
          </ThemeProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
