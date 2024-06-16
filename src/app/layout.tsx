import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { countdown } from "./utils";
import { START_TIME } from "./constants";
import "./globals.css";

const mono = Space_Mono({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How long has it been since Khanh quit smoking?",
  description: countdown(START_TIME),
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
