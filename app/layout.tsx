import type { Metadata } from "next";
import "./globals.css";
import { IM_Fell_English_SC,IM_Fell_DW_Pica } from "next/font/google";
import Header from "@/components/header/page";
import FloatingButton from "@/components/floating-button/page";
import Footer from "@/components/footer/page";
import Script from "next/script";

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
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        >
          {`
         !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '467021129621361');
fbq('track', 'PageView');

        `}
        </Script>
      </head>
      <body
        className={`${im_fell_pika.className} ${im_fell.variable} antialiased`}
      >
        <Header/>
        <FloatingButton/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
