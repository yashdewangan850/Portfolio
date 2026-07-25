import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata = {
  title: "Yash Kumar Dewangan — MERN Stack Developer",
  description: "Portfolio of Yash Kumar Dewangan, a MERN stack and frontend developer crafting focused digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><SmoothScroll/>{children}</body>
    </html>
  );
}
