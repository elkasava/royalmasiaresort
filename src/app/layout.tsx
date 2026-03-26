import type { Metadata } from "next";
import { Abril_Fatface, Raleway } from "next/font/google";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${abrilFatface.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
