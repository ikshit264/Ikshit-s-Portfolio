'use client';
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "./globals.css";
import { StateProvider } from "@/hooks/StateContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/public/1.svg" type="image/svg+xml" />
      </head> */}
      <body className={`${inter.className}`}>
        <StateProvider>{children}</StateProvider>
        <Analytics />
      </body>
    </html>
  );
}
