"use client";

import React, { useState } from "react";
import NoticeList from "@/components/board/NoticeList";
import PrayerCounsel from "@/components/board/PrayerCounsel";
import { Megaphone, HeartHandshake, Sparkles } from "lucide-react";

export default function BoardPage() {
  const [activeTab, setActiveTab] = useState<"notice" | "counsel">("notice");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
      {/* 상단 헤더 */}
      <div className="text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-800 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>청소년교회 소통 채널</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          소통 게시판
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          교회 소식과 공지사항을 확인하고, 기도제목과 고민을 안전하게 나눠보세요.
        </p>
      </div>

      {/* 서브 탭 바 */}
      <div className="flex p-1.5 bg-slate-200/80 rounded-2xl max-w-md mx-auto">
        <button
          onClick={() => setActiveTab("notice")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "notice"
              ? "bg-white text-brand-green-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Megaphone className={`w-4 h-4 ${activeTab === "notice" ? "text-brand-green-800" : "text-slate-400"}`} />
          <span>공지사항</span>
        </button>

        <button
          onClick={() => setActiveTab("counsel")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "counsel"
              ? "bg-white text-brand-green-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <HeartHandshake className={`w-4 h-4 ${activeTab === "counsel" ? "text-brand-green-800" : "text-slate-400"}`} />
          <span>기도제목 & 고민상담</span>
        </button>
      </div>

      {/* 탭 콘텐츠 본문 */}
      <div>
        {activeTab === "notice" ? <NoticeList /> : <PrayerCounsel />}
      </div>
    </div>
  );
}
