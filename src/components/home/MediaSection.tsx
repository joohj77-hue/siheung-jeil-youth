import React from "react";
import { churchInfo } from "@/data/pastor";
import { currentSermon } from "@/data/worship";
import { Youtube, Instagram, ExternalLink, Play, Sparkles } from "lucide-react";

export default function MediaSection() {
  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green-800 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Media & Community</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            유튜브 말씀 & 인스타그램
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            주일 현장 예배에 부득이 참석하지 못했거나 말씀을 다시 듣고 싶을 때 언제든 함께하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 유튜브 최신 설교 영상 플레이어 (8컬럼) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 text-white flex flex-col">
            {/* 영상 썸네일 / 임베드 영역 */}
            <div className="relative aspect-video w-full bg-slate-950">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${currentSermon.youtubeVideoId}?rel=0`}
                title="시흥제일 청소년교회 최신 설교 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* 영상 설명 박스 */}
            <div className="p-5 sm:p-6 bg-slate-900">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1">
                  <Play className="w-3 h-3 fill-current" /> 최신 주일 설교
                </span>
                <span className="text-xs text-slate-400">{currentSermon.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {currentSermon.title}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                본문: {currentSermon.scripture} | 설교: {currentSermon.preacher}
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <a
                  href={churchInfo.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  유튜브 채널 구독 & 전체 영상
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* 공식 인스타그램 배너 카드 (5컬럼) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-pink-500 via-rose-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">공식 인스타그램</h3>
                  <p className="text-xs text-white/90 font-medium">@siheungjeil_youth</p>
                </div>
                <p className="text-xs sm:text-sm text-pink-50/90 leading-relaxed font-light">
                  매주 예배 스케치 사진, 수련회 현장 하이라이트, 반별 활동 소식 및 깜짝 릴스 영상이 실시간으로 업로드됩니다!
                </p>

                <div className="pt-2">
                  <a
                    href={churchInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm font-bold shadow-md hover:bg-pink-50 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    인스타그램 팔로우하기
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 배경 데코레이션 */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
            </div>

            {/* 청소년교회 비전 한줄 카드 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-700">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                시흥제일 청소년 공동체 꿀팁
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                👉 인스타그램 DM이나 홈페이지의 <strong>[소통 게시판]</strong>을 통해 기도제목이나 학교 생활 고민을 언제든 편하게 나눌 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
