import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Messele Bulcha Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen bg-gray-200 text-slate-800 flex-col items-center justify-between">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
