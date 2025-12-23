import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waadi Software | Digital Growth & Systems Studio",
  description: "Waadi Software builds websites, digital systems, professional media, and advertising campaigns that help businesses grow and operate efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 72px - 300px)' }}> {/* Approximate min-height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
