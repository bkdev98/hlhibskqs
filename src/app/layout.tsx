import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const mono = Space_Mono({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How long has it been since Khanh quit smoking?",
  description: "Let's find out 😏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
