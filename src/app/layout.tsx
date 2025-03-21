'use client';
import { Analytics } from "@vercel/analytics/react";
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
      <head>
        <title>My Portfolio | Windows XP Experience</title>
        <meta name="description" content="Welcome to My Portfolio, where you get a nostalgic experience of Windows XP." />
        <meta name="keywords" content="Next.js, React, Web App, Modern UI, Ikshit, Portfolio, Windows XP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
      </head>
      <body className={`${inter.className}`}>
        <StateProvider>
          {children}
        </StateProvider>
        <Analytics />
      </body>
    </html>
  );
}
