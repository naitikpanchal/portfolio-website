import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naitik's Portfolio",
  description: "Naitik is a software engineer who loves to build things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#dbd7fb] absolute -z-10 h-[35rem] w-[47.50rem] rounded-full top-[-5rem] blur-[10rem]"></div>
        <div className="bg-[#fbe2e3] absolute -z-10 h-[35rem] w-[47.50rem] right-0 top-[-6rem] rounded-full blur-[10rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right"
  reverseOrder={true}/>
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
