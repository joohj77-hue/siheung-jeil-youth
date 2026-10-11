"use client";

import React, { useState } from "react";
import Image from "next/image";
import { noticeList } from "@/data/notices";
import { NoticeItem } from "@/types";
import { Pin, Calendar, Tag, ChevronRight, X, Megaphone } from "lucide-react";

export default function NoticeList() {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  return (
    <div className="space-y-6">
      {/* 공지사항 목록 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {noticeList.map((notice) => (
          <div
            key={notice.id}
            onClick={() => setSelectedNotice(notice)}
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-green-300 transition-all cursor-pointer flex flex-col justify-between group"
          >
            {/* 썸네일 이미지 (있을 경우) */}
            {notice.imageUrl && (
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={notice.imageUrl}
                  alt={notice.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    {notice.isPinned && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-100 text-red-700 text-[11px] font-bold">
                        <Pin className="w-3 h-3" /> 필독
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold">
                      {notice.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {notice.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-green-800 transition-colors line-clamp-2">
                  {notice.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed whitespace-pre-line">
                  {notice.content}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-green-800">
                <span>자세히 보기</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 공지 상세 모달 */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedNotice(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              {selectedNotice.isPinned && (
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center gap-1">
                  <Pin className="w-3 h-3" /> 필독 공지
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full bg-brand-green-100 text-brand-green-800 text-xs font-bold">
                {selectedNotice.category}
              </span>
              <span className="text-xs text-slate-400 ml-auto mr-8">
                {selectedNotice.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
              {selectedNotice.title}
            </h3>

            {selectedNotice.imageUrl && (
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 shadow-sm">
                <Image
                  src={selectedNotice.imageUrl}
                  alt={selectedNotice.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50 p-5 rounded-2xl border border-slate-100">
              {selectedNotice.content}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedNotice(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
