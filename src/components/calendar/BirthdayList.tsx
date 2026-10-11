import React from "react";
import { studentBirthdays } from "@/data/calendar";
import { maskStudentName } from "@/lib/masking";
import { Cake, Sparkles, ShieldCheck } from "lucide-react";

interface BirthdayListProps {
  currentMonth: number;
}

export default function BirthdayList({ currentMonth }: BirthdayListProps) {
  const currentMonthBirthdays = studentBirthdays.filter(
    (b) => b.month === currentMonth
  );

  return (
    <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-yellow-50/80 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-200/60">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center shadow-md">
            <Cake className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900">
                {currentMonth}월의 생일 축하 🎂
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
                {currentMonthBirthdays.length}명
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              하나님의 귀한 자녀로 태어난 우리 청소년들을 사랑하고 축복합니다!
            </p>
          </div>
        </div>

        {/* 개인정보 보호 안내 뱃지 */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 border border-amber-200 text-xs text-amber-900 font-medium self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>청소년 안심 마스킹 적용</span>
        </div>
      </div>

      {currentMonthBirthdays.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {currentMonthBirthdays.map((item) => {
            const maskedName = maskStudentName(item.name);
            return (
              <div
                key={item.id}
                className="bg-white/95 rounded-2xl p-4 border border-amber-200/70 shadow-xs flex flex-col items-center text-center hover:scale-[1.02] transition-transform"
              >
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-xs font-bold text-amber-800 mb-0.5">
                  {item.month}월 {item.day}일
                </span>
                <span className="text-base font-extrabold text-slate-900">
                  {maskedName}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 px-2 py-0.5 rounded-md bg-slate-100">
                  {item.grade}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8 text-sm text-slate-400 bg-white/50 rounded-2xl border border-dashed border-amber-200">
          {currentMonth}월에는 생일자가 없습니다.
        </div>
      )}

      <div className="mt-5 text-center text-xs text-amber-800/80">
        생일 주일에는 예배 중 축하 선물과 함께 온 성도가 축복기도를 나눕니다. 🎉
      </div>
    </div>
  );
}
