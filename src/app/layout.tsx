import type { Metadata } from "next";
import { Abril_Fatface, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Royal Massia Resort | Suriname",
  description:
    "Ontsnap naar de natuur bij Royal Massia Resort in Suriname. Cabana's aan het water, kajaks, kano's, hangmatten en onvergetelijke natuurervaringen.",
  keywords: "Royal Massia Resort, Suriname, vakantie, cabana, natuur, Tapawatra, Ananasberg",
  openGraph: {
    title: "Royal Massia Resort | Suriname",
    description: "Ontsnap naar de natuur bij Royal Massia Resort in Suriname.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500&family=Raleway:wght@200;300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${abrilFatface.variable} ${raleway.variable} antialiased`}>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
