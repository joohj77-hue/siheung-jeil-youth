import React from "react";
import Image from "next/image";
import { pastorData } from "@/data/pastor";
import { MessageCircleHeart, Sparkles } from "lucide-react";

export default function PastorIntro() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-brand-green-50 via-slate-50 to-emerald-50/50 rounded-3xl p-6 sm:p-10 border border-brand-green-100/80 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* 프로필 이미지 */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-md ring-4 ring-white relative">
                <Image
                  src={pastorData.image}
                  alt={pastorData.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-brand-green-800 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                담당 교역자
              </div>
            </div>

            {/* 교역자 메시지 내용 */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{pastorData.role}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {pastorData.name}
              </h2>

              {/* 주요 한 줄 메시지 카드 */}
              <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-brand-green-200/60 shadow-xs">
                <MessageCircleHeart className="w-5 h-5 text-brand-green-700 mb-1 inline-block mr-1.5" />
                <p className="text-base sm:text-lg font-semibold text-brand-green-900 inline leading-relaxed">
                  &ldquo;{pastorData.message}&rdquo;
                </p>
                {pastorData.subMessage && (
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {pastorData.subMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
