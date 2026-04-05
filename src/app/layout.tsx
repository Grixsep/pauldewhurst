import type { Metadata } from "next";
import { Raleway, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", weight: ["300","400","500","600","700","800"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", weight: ["300","400","600"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400","500"] });

export const metadata: Metadata = {
  title: "Paul Dewhurst — Simulation Engineer",
  description: "Portfolio of Paul Dewhurst, simulation engineer at Last Energy and founder of PAACS Software.",
  authors: [{ name: "Paul Dewhurst" }],
  keywords: ["Paul Dewhurst","simulation engineer","PAACS","CFD","FEA","Last Energy"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${openSans.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
