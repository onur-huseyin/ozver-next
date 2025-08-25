import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Özver Mekatronik",
  description: "Tekstil Boya ve Terbiye sektörü için HT Kumaş Boyama, Atmosferik Boyama, İplik Boyama Makineleri ve İplik Boya ekipmanları imalatının ( Kilit, Taşıyıcı, Perfore) yanı sıra gıda, kimya, ilaç sanayi ve diğer sektörlerde de ihtiyaç duyulan paslanmaz ünitelerin proje, imalat ve montaj taleplerine de yanıt vermektedir.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script src="https://documentcloud.adobe.com/view-sdk/main.js" async></script>
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
