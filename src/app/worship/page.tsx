"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import WorshipStaffTab from "@/components/worship/WorshipStaffTab";
import WorshipPraiseTab from "@/components/worship/WorshipPraiseTab";
import SermonTab from "@/components/worship/SermonTab";
import { Users, Music2, BookOpen } from "lucide-react";

type TabKey = "staff" | "praise" | "sermon";

function WorshipContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as TabKey) || "staff";
  const [activeTab, setActiveTab] = useState<TabKey>("staff");

  useEffect(() => {
    if (initialTab && ["staff", "praise", "sermon"].includes(initialTab)) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const tabs = [
    { key: "staff" as TabKey, label: "예배위원 안내", icon: Users },
    { key: "praise" as TabKey, label: "이번 주 찬양 콘티", icon: Music2 },
    { key: "sermon" as TabKey, label: "설교 요약 & 영상", icon: BookOpen },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* 페이지 헤더 */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          예배 & 말씀
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          주일 예배 순서와 섬김이, 찬양 콘티 및 설교 요약을 한눈에 확인하세요.
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex p-1.5 bg-slate-200/80 rounded-2xl mb-8 max-w-xl mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? "bg-white text-brand-green-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-brand-green-800" : "text-slate-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 탭 콘텐츠 본문 */}
      <div>
        {activeTab === "staff" && <WorshipStaffTab />}
        {activeTab === "praise" && <WorshipPraiseTab />}
        {activeTab === "sermon" && <SermonTab />}
      </div>
    </div>
  );
}

export default function WorshipPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto p-12 text-center text-slate-400">페이지를 불러오는 중...</div>}>
      <WorshipContent />
    </Suspense>
  );
}
