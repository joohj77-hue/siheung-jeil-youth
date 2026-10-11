"use client";

import React, { useState } from "react";
import { calendarEvents } from "@/data/calendar";
import { CalendarEvent } from "@/types";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  School, 
  Church, 
  Clock, 
  Sparkles,
  Filter
} from "lucide-react";

interface EventCalendarProps {
  currentYear: number;
  currentMonth: number;
  onMonthChange: (year: number, month: number) => void;
}

export default function EventCalendar({
  currentYear,
  currentMonth,
  onMonthChange,
}: EventCalendarProps) {
  const [filterType, setFilterType] = useState<"all" | "church" | "school">("all");

  const prevMonth = () => {
    if (currentMonth === 1) {
      onMonthChange(currentYear - 1, 12);
    } else {
      onMonthChange(currentYear, currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 12) {
      onMonthChange(currentYear + 1, 1);
    } else {
      onMonthChange(currentYear, currentMonth + 1);
    }
  };

  // 해당 월 이벤트 필터링
  const monthPrefix = `${currentYear}-${String(currentMonth).padStart(2, "0")}`;
  const eventsInMonth = calendarEvents.filter((evt) => {
    const matchesMonth = evt.date.startsWith(monthPrefix);
    if (!matchesMonth) return false;
    if (filterType === "all") return true;
    return evt.type === filterType;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
      {/* 상단 컨트롤러 (연/월 변경 & 카테고리 필터) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        {/* 월 네비게이션 */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevMonth}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
            aria-label="이전 달"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 min-w-[140px] text-center">
            {currentYear}년 {currentMonth}월
          </h3>

          <button
            onClick={nextMonth}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
            aria-label="다음 달"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 필터 버튼들 */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-auto text-xs font-semibold">
          <button
            onClick={() => setFilterType("all")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterType === "all"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            전체 일정
          </button>
          <button
            onClick={() => setFilterType("church")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
              filterType === "church"
                ? "bg-brand-green-800 text-white shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Church className="w-3.5 h-3.5" />
            교회 행사
          </button>
          <button
            onClick={() => setFilterType("school")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
              filterType === "school"
                ? "bg-brand-blue-800 text-white shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <School className="w-3.5 h-3.5" />
            학교/학사일정
          </button>
        </div>
      </div>

      {/* 이벤트 목록 / 카드 뷰 */}
      <div className="space-y-3.5">
        {eventsInMonth.length > 0 ? (
          eventsInMonth.map((evt) => {
            const isChurch = evt.type === "church";
            return (
              <div
                key={evt.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isChurch
                    ? "bg-brand-green-50/40 border-brand-green-100 hover:border-brand-green-300"
                    : "bg-blue-50/40 border-blue-100 hover:border-blue-300"
                }`}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm ${
                      isChurch
                        ? "bg-brand-green-100 text-brand-green-900"
                        : "bg-blue-100 text-blue-900"
                    }`}
                  >
                    {isChurch ? <Church className="w-5 h-5" /> : <School className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                          isChurch
                            ? "bg-brand-green-200 text-brand-green-900"
                            : "bg-blue-200 text-blue-900"
                        }`}
                      >
                        {isChurch ? "교회 행사" : "학교 학사일정"}
                      </span>
                      {evt.isImportant && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-700" />
                          주요 일정
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {evt.title}
                    </h4>

                    {evt.description && (
                      <p className="text-xs text-slate-500 mt-1">
                        {evt.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="self-end sm:self-center shrink-0 text-right">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs inline-block">
                    {evt.endDate ? `${evt.date} ~ ${evt.endDate}` : evt.date}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-sm text-slate-400">
            {currentYear}년 {currentMonth}월에 예정된 {filterType === "all" ? "일정이" : "해당 구분의 일정이"} 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
