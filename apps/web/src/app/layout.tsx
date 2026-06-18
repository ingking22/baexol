import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Pretendard — 한글 + 라틴 본문 (self-hosted variable)
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

// 나눔명조 — 디스플레이 세리프 (한글 + 라틴 통합, 단일 세리프 보이스)
const serif = localFont({
  src: "./fonts/KoreanSerif.woff2",
  variable: "--font-myeongjo",
  display: "swap",
  weight: "400",
});

// Geist Mono — 라벨 · 키워드 · 인덱스 (엔지니어링 톤)
const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baexol.dev"),
  title: {
    default: "BAEXOL — Full-Stack AI Engineer",
    template: "%s · BAEXOL",
  },
  description:
    "Full-stack AI engineer — from initial architecture to high-performance AI serving, taking full ownership of the product lifecycle.",
  keywords: [
    "BAEXOL",
    "Full-Stack AI Engineer",
    "AI serving",
    "FastAPI",
    "Next.js",
    "system architecture",
    "portfolio",
  ],
  openGraph: {
    title: "BAEXOL — Full-Stack AI Engineer",
    description:
      "From initial architecture to high-performance AI serving — taking full ownership of the product lifecycle.",
    url: "https://www.baexol.dev",
    siteName: "BAEXOL",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAEXOL — Full-Stack AI Engineer",
    description:
      "From initial architecture to high-performance AI serving — taking full ownership of the product lifecycle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="bg-snowfield grain min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
