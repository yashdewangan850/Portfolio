import "./globals.css";

import { Inter } from "next/font/google";

import { SmoothScroll } from "@/components/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgress from "@/components/ui/scroll-progress";
// import LoadingScreen from "@/components/ui/loading-screen";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Yash Kumar Dewangan | Full Stack MERN Developer",
    template: "%s | Yash Kumar Dewangan",
  },

  description:
    "Full Stack MERN Developer specializing in React, Next.js, Node.js, Express.js and MongoDB. Building scalable, responsive and modern web applications.",

  keywords: [
    "Yash Kumar Dewangan",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Yash Kumar Dewangan",
    },
  ],

  creator: "Yash Kumar Dewangan",

  openGraph: {
    title: "Yash Kumar Dewangan | Full Stack MERN Developer",

    description:
      "Portfolio showcasing modern web applications built with the MERN Stack.",

    url: "https://your-domain.vercel.app",

    siteName: "Yash Portfolio",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Kumar Dewangan Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Yash Kumar Dewangan",

    description:
      "Full Stack MERN Developer building scalable web applications.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${inter.className} min-h-screen`}>
        {/* <LoadingScreen /> */}

        <CustomCursor />

        <ScrollProgress />

        <SmoothScroll />

        {children}
      </body>
    </html>
  );
}