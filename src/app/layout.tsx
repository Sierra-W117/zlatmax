import type { Metadata } from "next";

import '@/styles/index.scss';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "zlatmax",
};

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru" className={`${montserrat.variable}`}>
          <body className="wrapper">
              <Header />
              <main>{children}</main>
              <Footer />
          </body>
      </html>
  );
}
