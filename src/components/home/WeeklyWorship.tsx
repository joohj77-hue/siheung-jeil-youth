import React from "react";
import Link from "next/link";
import { currentWorshipWeek, worshipStaffList } from "@/data/worship";
import { Calendar, Clock, MapPin, BookOpen, Users, Music2, ArrowRight } from "lucide-react";

export default function WeeklyWorship() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 섹션 헤더 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green-800 uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Weekly Service Information</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              이번 주 주일 예배 안내
            </h2>
          </div>
          <Link
            href="/worship"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-800 hover:text-brand-green-950 transition-colors group"
          >
            찬양 콘티 & 설교 요약 전체보기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 예배 안내 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 주요 말씀 정보 카드 (2칸 차지) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-bold">
                  {currentWorshipWeek.dateString}
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  설교: {currentWorshipWeek.preacher}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                &ldquo;{currentWorshipWeek.title}&rdquo;
              </h3>
              <p className="text-sm font-semibold text-brand-blue-700 flex items-center gap-1.5 mb-6">
                <BookOpen className="w-4 h-4" />
                본문 말씀: {currentWorshipWeek.scripture}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">예배 시간</span>
                    <span className="text-sm font-bold text-slate-800">{currentWorshipWeek.worshipTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">예배 장소</span>
                    <span className="text-sm font-bold text-slate-800">{currentWorshipWeek.place}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>* 주일예배 10분 전까지 착석하여 기도로 준비합시다.</span>
              <Link
                href="/worship?tab=sermon"
                className="text-xs font-bold text-brand-green-800 hover:underline"
              >
                설교 요약 읽기 →
              </Link>
            </div>
          </div>

          {/* 이번 주 섬김이 & 예배위원 간략 카드 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-green-800" />
                <h4 className="font-bold text-slate-900">이번 주 예배 섬김이</h4>
              </div>
              <span className="text-[11px] text-slate-400">주일 예배</span>
            </div>

            <div className="space-y-3 flex-1">
              {worshipStaffList.map((staff, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-sm py-1.5 border-b border-slate-50 last:border-none"
                >
                  <span className="text-slate-500 font-medium text-xs sm:text-sm">
                    {staff.role}
                  </span>
                  <div className="text-right">
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">
                      {staff.name}
                    </span>
                    {staff.note && (
                      <span className="block text-[11px] text-slate-400">
                        {staff.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/worship?tab=praise"
              className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-brand-green-50 hover:bg-brand-green-100 text-brand-green-800 text-xs font-bold transition-colors"
            >
              <Music2 className="w-4 h-4" />
              이번 주 찬양 콘티 확인하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
