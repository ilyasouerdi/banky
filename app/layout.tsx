import type { Metadata } from "next";
import localFont from "next/font/local";
import {IBM_Plex_Serif, Inter} from "next/font/google";
import "./globals.css";

const inter = Inter(
  {
    variable:'--font-inter',
    subsets: ["latin"],
  }
)
const ibmPlexSerif = IBM_Plex_Serif({
  variable:'--font-ibm-plex-serif',
  weight: ["400", "700"],
  subsets: ["latin"],
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Banky",
  description: "Banking platform for everyone ,every where.",
  icons: '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
