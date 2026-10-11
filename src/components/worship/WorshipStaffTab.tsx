import React from "react";
import { worshipStaffList, currentWorshipWeek } from "@/data/worship";
import { Users, Info, Sparkles } from "lucide-react";

export default function WorshipStaffTab() {
  return (
    <div className="space-y-6">
      {/* 안내 배너 */}
      <div className="p-4 rounded-2xl bg-brand-green-50/70 border border-brand-green-200/60 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-brand-green-700 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-brand-green-900">
            {currentWorshipWeek.dateString} 예배 섬김이
          </h4>
          <p className="text-xs text-brand-green-800/90 mt-0.5">
            기쁨과 감사함으로 예배를 돕는 청소년교회 섬김이들을 위해 함께 기도해 주세요.
          </p>
        </div>
      </div>

      {/* 예배위원 표 (Table) UI */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600">
                <th className="py-3.5 px-4 sm:px-6">구분</th>
                <th className="py-3.5 px-4 sm:px-6">섬김이</th>
                <th className="py-3.5 px-4 sm:px-6">비고 / 담당</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {worshipStaffList.map((staff, index) => (
                <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-brand-green-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green-600" />
                    {staff.role}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-800">
                    {staff.name}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 text-xs sm:text-sm">
                    {staff.note || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 안내 주의문 */}
      <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100/70 p-3.5 rounded-xl">
        <Info className="w-4 h-4 text-slate-400 shrink-0" />
        <span>
          * 순서 변경이나 사정이 있을 경우 금요일까지 담당 교역자(김하늘 전도사)에게 미리 연락 바랍니다.
        </span>
      </div>
    </div>
  );
}
