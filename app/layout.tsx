import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Кинолог в Мариуполе - Дрессировка и Коррекция Поведения Собак",
  description: "Профессиональная дрессировка и передержка собак в Мариуполе. Дипломированный кинолог-инструктор 3 категории предлагает услуги по коррекции поведения, обучению и заботе о ваших питомцах. Индивидуальный подход к каждой собаке.",
  keywords: "кинолог Мариуполь, дрессировка собак, передержка собак, коррекция поведения, услуги кинолога, обучение собак",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
