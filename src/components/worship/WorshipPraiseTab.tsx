import React from "react";
import { praiseSongs, currentWorshipWeek } from "@/data/worship";
import { Music2, Youtube, FileText, ExternalLink, PlayCircle } from "lucide-react";

export default function WorshipPraiseTab() {
  return (
    <div className="space-y-6">
      {/* 헤더 안내 */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
        <Music2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-amber-950">
            {currentWorshipWeek.dateString} 찬양 콘티
          </h4>
          <p className="text-xs text-amber-800 mt-0.5">
            예배 전 찬양을 미리 듣고 묵상하며 은혜를 사모하는 마음으로 함께 준비해요.
          </p>
        </div>
      </div>

      {/* 곡 목록 카드 */}
      <div className="grid grid-cols-1 gap-4">
        {praiseSongs.map((song) => (
          <div
            key={song.order}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:border-brand-green-300 transition-all group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* 트랙 번호 뱃지 */}
                <div className="w-10 h-10 rounded-xl bg-brand-green-100 text-brand-green-900 flex items-center justify-center font-extrabold text-base shrink-0 group-hover:bg-brand-green-800 group-hover:text-white transition-colors">
                  0{song.order}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-green-900 transition-colors">
                      {song.title}
                    </h4>
                    {song.artist && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {song.artist}
                      </span>
                    )}
                  </div>

                  {song.lyricsSummary && (
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed font-light italic">
                      &ldquo;{song.lyricsSummary}&rdquo;
                    </p>
                  )}
                </div>
              </div>

              {/* 링크 버튼들 */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                {song.youtubeUrl && (
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    유튜브 찬양 듣기
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {song.scoreUrl && (
                  <a
                    href={song.scoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    악보 검색
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-xs text-slate-400">
        샤인(Shine) 찬양팀 연습 시간: 매주 주일 오전 9:30 본당 앞 찬양석
      </div>
    </div>
  );
}
