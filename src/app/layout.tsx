import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | NFT preview card component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased",
          "flex flex-col min-h-screen min-w-screen",
          font.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
