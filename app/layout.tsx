import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientNav from "@/components/ClientNav";
import { RightSidebar } from "@/components/Righbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fusion UI",
  description: "A modern, responsive dashboard interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-black text-white">
          <Navbar />
          <div className="flex overflow-hidden p-4 h-[92vh] overflow-y-hidden">
            <aside className="hidden w-64 border-r border-gray-800 bg-black lg:block h-screen overflow-y-auto">
              <ClientNav />
            </aside>
            <main className="flex-1 px-8 py-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {children}
            </main>
            <aside className="hidden w-64 border-l border-gray-800 bg-black px-8 py-8 lg:block h-screen overflow-y-auto">
              <RightSidebar />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}