import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "시흥제일 청소년교회 | 시흥제일교회 중고등부",
  description: "말씀으로 세워지고 기도로 승리하는 믿음의 세대, 시흥제일교회 청소년교회(중고등부) 공식 홈페이지입니다.",
  keywords: ["시흥제일교회", "시흥제일 청소년교회", "중고등부", "주일예배", "찬양콘티", "교회학교"],
  openGraph: {
    title: "시흥제일 청소년교회",
    description: "하나님의 말씀 안에서 자라가는 청소년 신앙공동체",
    url: "https://siheungjeil-youth.vercel.app",
    siteName: "시흥제일 청소년교회",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-green-100 selection:text-brand-green-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
