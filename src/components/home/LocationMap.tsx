"use client";

import React, { useState } from "react";
import { churchInfo } from "@/data/pastor";
import { MapPin, Navigation, Copy, Check, Bus, Train, ExternalLink } from "lucide-react";

export default function LocationMap() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(churchInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green-800 uppercase tracking-wider mb-2">
            <Navigation className="w-4 h-4" />
            <span>Location & Directions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            예배 장소 및 찾아오시는 길
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            시흥제일교회 교육관 3층 소예배실에서 기다리고 있습니다.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* 지도 인터랙티브 UI / 네이버 지도 링크 프리뷰 영역 (7컬럼) */}
          <div className="lg:col-span-7 bg-slate-100 relative min-h-[320px] flex flex-col items-center justify-center p-6 text-center border-b lg:border-b-0 lg:border-r border-slate-200">
            {/* 네이버 지도 스타일 안내 박스 */}
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-600/30">
              <MapPin className="w-9 h-9" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              시흥제일교회 (교육관 3층)
            </h3>
            <p className="text-sm text-slate-600 max-w-md mb-6">
              {churchInfo.address}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={churchInfo.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white text-sm font-bold shadow-md transition-all hover:scale-[1.02]"
              >
                <span className="font-extrabold tracking-tighter text-base">N</span>
                네이버 지도로 바로보기
                <ExternalLink className="w-4 h-4 ml-0.5" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-semibold transition"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                {copied ? "주소 복사 완료!" : "주소 복사하기"}
              </button>
            </div>

            <p className="text-[11px] text-slate-400 mt-4">
              * 스마트폰에서 네이버 지도 버튼을 누르면 길찾기 앱으로 바로 연결됩니다.
            </p>
          </div>

          {/* 대중교통 및 상세 안내 (5컬럼) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-brand-green-800" />
                대중교통 이용 안내
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">지하철 이용 시</span>
                    <span className="text-xs text-slate-500 leading-relaxed block mt-0.5">
                      서해선 <strong>시흥대야역</strong> 1번 출구에서 도보 약 7분 (또는 버스 1정거장)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">시내버스 이용 시</span>
                    <span className="text-xs text-slate-500 leading-relaxed block mt-0.5">
                      &lsquo;대야동 주민센터 / 시흥제일교회&rsquo; 정류장 하차 (일반 31-7, 63, 1번 버스 등)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">교육관 위치 안내</span>
                    <span className="text-xs text-slate-500 leading-relaxed block mt-0.5">
                      교회 본당 옆 교육관 건물 엘리베이터 탑승 후 <strong>3층 소예배실</strong>로 오시면 됩니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500">
              <span className="font-bold text-slate-700 block mb-0.5">주차 안내</span>
              교회 지하 1·2층 주차장 무료 이용 가능 (주일 오전에는 혼잡할 수 있으니 대중교통 이용을 권장합니다.)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
