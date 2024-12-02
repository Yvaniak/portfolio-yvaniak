import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { Analytics } from "@vercel/analytics/react";

import localfont from "next/font/local";
import localFont from "next/font/local";
const inter = localFont({ src: "./Inter.ttf" });

export const metadata: Metadata = {
  title: "Yvaniak",
  description: "my simple portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><meta name="darkreader-lock"/></head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
