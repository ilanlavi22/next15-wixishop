import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | WixiShop",
    absolute: "WixiShop",
  },
  description: "WixiShop is the best place to buy your favorite products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>{children}</body>
    </html>
  );
}
