import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Safwaan Majid — Robotics, AI & Engineering",
  description:
    "Competitive robotics, autonomous systems, and AI. Portfolio of projects, awards, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-mantine-color-scheme="dark"
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" forceColorScheme="dark" />
      </head>
      <body className={`min-h-full flex flex-col ${geistSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
