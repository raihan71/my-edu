import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Showwcase Education",
  description: "Welcome to Showwcase Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-gray-900 to-black">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
