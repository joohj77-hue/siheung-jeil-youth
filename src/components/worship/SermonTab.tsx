import React, { useState } from "react";
import { currentSermon, pastSermons } from "@/data/worship";
import { BookOpen, Calendar, Youtube, CheckCircle2, ChevronRight, Play } from "lucide-react";
import { SermonInfo } from "@/types";

export default function SermonTab() {
  const [selectedSermon, setSelectedSermon] = useState<SermonInfo>(currentSermon);

  return (
    <div className="space-y-8">
      {/* 현재 선택된 설교 상세 뷰 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {selectedSermon.date}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              설교자: {selectedSermon.preacher}
            </span>
          </div>

          <a
            href={selectedSermon.fullYoutubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-600 text-white hover:bg-red-700 text-xs font-bold shadow-sm transition-colors"
          >
            <Youtube className="w-4 h-4" />
            유튜브에서 시청
          </a>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            {selectedSermon.title}
          </h3>
          <p className="text-sm font-semibold text-brand-blue-700 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            말씀 본문: {selectedSermon.scripture}
          </p>
        </div>

        {/* 유튜브 영상 플레이어 */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-md">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${selectedSermon.youtubeVideoId}?rel=0`}
            title={selectedSermon.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* 핵심 말씀 요약 포인트 */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green-700" />
            말씀 핵심 요약 및 묵상 포인트
          </h4>

          <div className="space-y-2.5 pt-1">
            {selectedSermon.summary.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-brand-green-100 text-brand-green-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 지난 설교 목록 아카이브 */}
      <div>
        <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-500" />
          지난 설교 말씀 아카이브
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[currentSermon, ...pastSermons].map((sermon, idx) => {
            const isSelected = selectedSermon.date === sermon.date;
            return (
              <button
                key={idx}
                onClick={() => setSelectedSermon(sermon)}
                className={`text-left p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? "bg-brand-green-50/70 border-brand-green-700 ring-2 ring-brand-green-700/20"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>{sermon.date}</span>
                  <span className="font-medium text-slate-500">{sermon.preacher}</span>
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1">{sermon.title}</h5>
                <p className="text-xs text-slate-500">{sermon.scripture}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
