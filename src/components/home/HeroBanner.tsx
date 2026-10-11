import React from "react";
import Link from "next/link";
import { churchInfo } from "@/data/pastor";
import { ArrowRight, BookOpen, Calendar, HeartHandshake, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-green-900 via-brand-green-800 to-brand-green-950 text-white py-16 sm:py-24">
      {/* 배경 장식 원형 그라데이션 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-emerald-400 blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* 뱃지 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-emerald-200 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>시흥제일교회 청소년교회 (중·고등부)</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight sm:leading-snug">
          말씀으로 자라가고,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-100 to-amber-200">
            사랑으로 하나 되는
          </span>{" "}
          우리
        </h1>

        {/* 슬로건 서브텍스트 */}
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-emerald-100/90 leading-relaxed font-light">
          {churchInfo.slogan}
          <br className="hidden sm:inline" />
          청소년 시기의 치열한 일상과 학업 가운데 함께 손잡고 나아가는 믿음의 울타리입니다.
        </p>

        {/* 빠른 바로가기 버튼 */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/worship"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm sm:text-base font-bold shadow-lg shadow-amber-400/20 transition-all hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4" />
            이번 주 예배 & 콘티
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/calendar"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm sm:text-base font-semibold backdrop-blur-sm transition-all"
          >
            <Calendar className="w-4 h-4 text-emerald-300" />
            통합 일정 & 생일
          </Link>

          <Link
            href="/board"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm sm:text-base font-semibold backdrop-blur-sm transition-all"
          >
            <HeartHandshake className="w-4 h-4 text-pink-300" />
            기도 & 고민 나눔
          </Link>
        </div>

        {/* 핵심 비전 포인트 3개 */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {churchInfo.vision.map((v, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-snug">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
