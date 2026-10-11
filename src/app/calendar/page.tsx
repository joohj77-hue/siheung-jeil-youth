"use client";

import React, { useState } from "react";
import EventCalendar from "@/components/calendar/EventCalendar";
import BirthdayList from "@/components/calendar/BirthdayList";
import { CalendarDays, Sparkles } from "lucide-react";

export default function CalendarPage() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(10);

  const handleMonthChange = (year: number, month: number) => {
    setCurrentYear(year);
    setCurrentMonth(month);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
      {/* 상단 헤더 */}
      <div className="text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-800 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>청소년교회 통합 캘린더</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          통합 달력 & 생일 안내
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          교회 행사, 학교 학사일정 및 월별 생일자를 함께 확인하고 동행합니다.
        </p>
      </div>

      {/* 1. 월별 생일자 안내 컴포넌트 (PRD 마스킹 요구사항 준수) */}
      <BirthdayList currentMonth={currentMonth} />

      {/* 2. 월별 통합 캘린더 (교회 행사 + 학사일정) */}
      <EventCalendar
        currentYear={currentYear}
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
      />
    </div>
  );
}
