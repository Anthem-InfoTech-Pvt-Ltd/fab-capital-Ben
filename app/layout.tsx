import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "FabCapital",
  description:
    "FabCapital is a fintech company that provides a range of financial services to businesses and consumers.",
  generator: "FabCapital",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://elfsightcdn.com/platform.js" async />
      </head>
      <body>{children}</body>
    </html>
  );
}
