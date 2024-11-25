import type { Metadata } from "next";
import "./globals.css";
import { IM_Fell_English_SC,IM_Fell_DW_Pica } from "next/font/google";
import Header from "@/components/header/page";

const im_fell = IM_Fell_English_SC({
  weight: [ "400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-im",
})

const im_fell_pika = IM_Fell_DW_Pica({
  weight: [ "400"],
  style: ["normal","italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-im-italic",
})

export const metadata: Metadata = {
  title: "Sanctorum",
  description: "Sanctorum.work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${im_fell_pika.className} ${im_fell.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
