import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import { ThemeProvider } from 'next-themes';
import ThemeCom from '@/components/ThemeCom';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeModeScript } from 'flowbite-react';
import { Play, Poppins } from "next/font/google";

// Fonts
const playFont = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Only Jesus",
  description: "Official Website of Only Jesus, where you can read and grow with God's word.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body className={`${playFont.variable} ${poppinsFont.variable}`}>
          <ThemeProvider>
            <ThemeCom>
              <TopNav />
              <Navbar />
              <main>{children}</main>
              <Footer />
            </ThemeCom>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}