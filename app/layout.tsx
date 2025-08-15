import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inside My Head — Portfolio",
  description: "Dive inside my mind. Pick a lobe to explore the work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
