import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { HeroPattern } from "@/components/HeroPattern";

export const metadata = {
  title: "taildwind",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-900">
        <Sidebar />

        <div className="ml-80 relative h-screen">
          <Header />
          <HeroPattern />

          <div className="py-24 max-w-4xl px-8 mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
