
import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader/Loader";
import Header from "@/components/header/Header";


const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900",],
  display: "swap",
  fallback: ["sans-serif"], 
});

export const metadata: Metadata = {
  title: "Green Forest App",
  description: "Green Forest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${albertSans.className} antialiased`}
      >
        <Loader/>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
